"use client";

import React, { memo, useCallback, useMemo } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { twClsx } from "../../misc/functions";
import z from "zod";

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
  privacy: "Privacy",
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
        "block text-center font-titleBold py-2 rounded-lg bg-gray-700 text-white text-sm w-full mt-3",
        className,
        disabled && "opacity-75 cursor-not-allowed"
      )}
    >
      {label}
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
}) {
  const labelNode = (
    <label
      htmlFor={id}
      className={twClsx(
        "text-gray-500 font-title mb-1 text-sm inline-block",
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
      />
    );
  }

  return (
    <div className={twClsx("mb-4", classNames?.root)}>
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
          "mb-3 font-contentBold uppercase text-sm lg:text-md text-center",
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
