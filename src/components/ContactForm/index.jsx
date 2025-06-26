"use client";

import React, { memo, useCallback, useMemo } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { twClsx } from "../../misc/functions";
import Link from "next/link";
import z from "zod";
import { links } from "../../../app.config";

function Spinner({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={twClsx([
        "animate-spin",
        className || "w-full h-full text-gray-200 fill-blue-600",
      ])}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}

/**
 * @typedef {{
 *   name?: RegExp,
 *   email?: RegExp,
 *   text?: RegExp
 * }} ValidationPatterns
 *
 * @typedef {{
 *   name: string,
 *   surname: string,
 *   email: string,
 *   title: string,
 *   content: string
 * }} ContactFormData
 *
 * @typedef {{
 *   root?: string,
 *   title?: string,
 *   input?: {
 *      root?: string,
 *      label?: string,
 *      input?: string
 *   },
 *   button?: string
 * }} ClassNames
 *
 * @typedef {"name" | "surname" | "email" | "title" | "content" | "privacy"} ContactFormField
 * @typedef {"pending" | "error" | "success"} ContactFormStatus
 * @typedef {(data: Record<ContactFormField, string>) => any) FormSubmitAction
 */

const DEFAULT_VALIDATION_PATTERNS = {
  name: /[a-zA-Z èùàòì]+/,
  text: /[^<>]+/,
};
const STATUS = { pending: "pending", error: "error", success: "success" };
const FIELDS = ["name", "surname", "email", "title", "content", "privacy"];

function getAutoComplete(field) {
  switch (field) {
    case "name":
      return "given-name";
    case "surname":
      return "family-name";
    case "email":
      return "email";
    default:
      return null;
  }
}

/**
 * @returns
 * @param {ContactFormField} field
 */
function getInputType(field) {
  if (field === "privacy") {
    return "checkbox";
  }
  if (field === "email") {
    return "email";
  }
  return "text";
}

/**
 * @returns
 * @param {ContactFormField} field
 * @param {Record<ContactFormField, string>?} invalidMessages
 */
function getInvalidMessage(field, invalidMessages) {
  return invalidMessages?.[field] || `Valore non valido.`;
}

/**
 * @type {Record<ContactFormField, string>}
 */
const DEFAULT_LABELS = {
  name: "Nome",
  surname: "Cognome",
  email: "Email",
  title: "Oggetto",
  content: "Messaggio",
  privacy: (
    <p className="inline leading-tight">
      Inviando questo modulo dichiaro di aver letto{" "}
      <Link
        className="underline text-blue-500"
        href={links.privacy["privacy-policy"]}
        target="_blank"
      >
        l'informativa sulla privacy (Privacy Policy)
      </Link>{" "}
      del sito www.maggi-mariano.it e acconsento alla memorizzazione dei miei
      dati, secondo quanto stabilito dal regolamento europeo per la protezione
      dei dati personali n. 679/2016 (GDPR).
    </p>
  ),
};

/**
 * @param {ValidationPatterns} validationPatterns
 * @param {Record<ContactFormField, string>} invalidMessages
 * @returns
 */
function useValidationSchema(validationPatterns, invalidMessages) {
  return useMemo(() => {
    const nameValidPattern =
      validationPatterns?.name || DEFAULT_VALIDATION_PATTERNS.name;
    const textValidPattern =
      validationPatterns?.text || DEFAULT_VALIDATION_PATTERNS.text;
    return z.object({
      privacy: z.literal("on"),
      email: validationPatterns?.email
        ? z
            .string()
            .regex(
              validationPatterns.email,
              getInvalidMessage("email", invalidMessages)
            )
        : z.string().email(getInvalidMessage("email", invalidMessages)),
      name: z
        .string()
        .regex(nameValidPattern, getInvalidMessage("name", invalidMessages)),
      surname: z
        .string()
        .regex(nameValidPattern, getInvalidMessage("surname", invalidMessages)),
      title: z
        .string()
        .regex(textValidPattern, getInvalidMessage("title", invalidMessages)),
      content: z
        .string()
        .regex(textValidPattern, getInvalidMessage("content", invalidMessages)),
    });
  }, [validationPatterns, invalidMessages]);
}

/**
 * @param {{label: string, className?: string, disabled?: boolean}} param0
 * @returns
 */
function SubmitButton({ label, className, disabled }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className={twClsx(
        "block text-center font-titleBold py-2 rounded-lg bg-gray-700 text-white text-sm w-full mt-6",
        className,
        disabled && "opacity-75 cursor-not-allowed"
      )}
    >
      {pending ? <Spinner className="w-[1em] h-[1em] inline-block" /> : label}
    </button>
  );
}

/**
 * @returns
 * @param {{
 *   label: string,
 *   id: string,
 *   name: string,
 *   type: "text" | "email",
 *   autoComplete?: string,
 *   classNames?: {
 *      root?: string,
 *      label?: string,
 *      input?: string,
 *      error?: string
 *   },
 *   error?: string,
 *   checkbox?: boolean,
 *   textarea?: boolean
 * }} param0
 */
function Input({
  label,
  id,
  name,
  type,
  classNames,
  error,
  checkbox,
  textarea,
  autoComplete,
}) {
  const labelNode = (
    <label
      htmlFor={id}
      className={twClsx(
        "text-gray-700 font-title mb-1 text-sm inline-block leading-tight",
        classNames?.label
      )}
    >
      {label}
    </label>
  );

  const inputClassName = twClsx(
    !checkbox &&
      "border-b border-gray-500 bg-white block w-full py-1 px-2 focus:outline-none font-content",
    classNames?.input
  );

  let inputNode;

  if (textarea) {
    inputNode = (
      <textarea id={id} name={name} className={inputClassName} required />
    );
  } else {
    inputNode = (
      <input
        id={id}
        type={checkbox ? "checkbox" : type}
        name={name}
        className={inputClassName}
        required
        autoComplete={autoComplete}
      />
    );
  }

  return (
    <div className={twClsx("mb-6", classNames?.root)}>
      {checkbox ? (
        <>
          {inputNode}
          {labelNode}
        </>
      ) : (
        <>
          {labelNode}
          {inputNode}
        </>
      )}
      {error && (
        <p
          className={twClsx(
            "text-xs text-red-primary font-title mt-1",
            classNames?.error
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * @returns
 * @param {{
 *   title: string,
 *   onSubmit: FormSubmitAction,
 *   labels?: Record<ContactFormField, string>,
 *   ids: {
 *      input: (field: ContactFormField) => string
 *   },
 *   getSubmitLabel: (status: ContactFormStatus) => string,
 *   classNames?: ClassNames,
 *   validationPatterns?: ValidationPatterns,
 *   invalidMessages?: Record<ContactFormField, string>
 * }} param0
 */
function ContactForm({
  onSubmit,
  title,
  labels,
  ids,
  getSubmitLabel,
  classNames,
  validationPatterns,
  invalidMessages,
}) {
  const validationSchema = useValidationSchema(
    validationPatterns,
    invalidMessages
  );
  const onActualFormSubmit = useCallback(
    (state, formData) => {
      const data = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        title: formData.get("title"),
        content: formData.get("content"),
        privacy: formData.get("privacy"),
      };
      const validatedFields = validationSchema.safeParse(data);
      if (validatedFields.success) {
        onSubmit(data);
        return { status: STATUS.success };
      }
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      return {
        status: STATUS.error,
        errors: fieldErrors,
      };
    },
    [onSubmit, validationSchema]
  );

  const [state, formAction] = useFormState(onActualFormSubmit, {
    status: STATUS.pending,
    errors: {},
  });

  return (
    <form action={formAction} className={classNames?.root}>
      <p
        className={twClsx(
          "mb-6 font-contentBold uppercase text-sm lg:text-md text-center text-gray-500",
          classNames?.title
        )}
      >
        {title}
      </p>
      {FIELDS.map((field) => (
        <Input
          label={labels?.[field] || DEFAULT_LABELS[field]}
          id={ids?.input(field)}
          name={field}
          key={field}
          type={getInputType(field)}
          classNames={{
            ...classNames?.input,
            root: twClsx(
              classNames?.input?.root,
              field === "privacy" && "mb-0"
            ),
            label: twClsx(
              classNames?.input?.label,
              field === "privacy" && "inline ml-2 text-xs text-gray-700"
            ),
            input: twClsx(
              classNames?.input?.input,
              field === "privacy" && "inline"
            ),
          }}
          error={state.errors?.[field]}
          checkbox={field === "privacy"}
          textarea={field === "content"}
          autoComplete={getAutoComplete(field)}
        />
      ))}
      <SubmitButton
        label={getSubmitLabel(state.status)}
        className={classNames?.button}
        disabled={state.status === STATUS.success}
      />
    </form>
  );
}

export default memo(ContactForm);
