import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { components } from "@italwebcom/tailwind-components";
import { allMatch, twClsx } from "../../../misc/functions";

const { Modal, Drawer, Card } = components;

function SectionTitle({ children }) {
  return (
    <h3 className="font-titleBold text-sm text-gray-600 mb-2">{children}</h3>
  );
}

function SectionParagraph({ children }) {
  return (
    <p className="font-title text-sm text-gray-500 mb-1 last:mb-0">
      {children}
    </p>
  );
}

function Radio({ label, checked, onClick, ids, disabled, className }) {
  const onActualClick = useCallback(
    (evt) => !disabled && onClick(evt),
    [onClick, disabled]
  );
  return (
    <div
      className={twClsx(
        "inline-flex items-center",
        disabled
          ? "cursor-not-allowed opacity-65"
          : "cursor-pointer lg:hover:opacity-75",
        className
      )}
      onClick={onActualClick}
    >
      <span id={ids.label} className="text-sm font-title text-gray-500 mr-2">
        {label}
      </span>
      <div
        role="radio"
        className="h-4 w-4 rounded-full border border-gray-300 inline-flex items-center justify-center"
        aria-checked={checked}
        aria-labelledby={ids.label}
        aria-disabled={disabled}
        id={ids.radio}
      >
        {checked && <div className="h-2 w-2 bg-blue-500 rounded-full"></div>}
      </div>
    </div>
  );
}

/**
 * @param {Record<string, Acceptance>} values
 * @param {string[]} settings
 * @returns
 */
function hasAllValues(values, settings) {
  return settings
    .map((setting) => typeof values[setting] !== "undefined")
    .reduce((a, b) => a && b);
}

/**
 * @param {Record<string, Acceptance>} values
 * @param {Record<string, Acceptance>} defaultValues
 * @returns
 */
function valuesMatch(values, defaultValues) {
  return allMatch(
    Object.getOwnPropertyNames(defaultValues),
    (prop) => defaultValues[prop] === values[prop]
  );
}

/**
 * @typedef {"accepted" | "not_accepted"} Acceptance
 * @typedef {{
 *    id: string,
 *    name: string,
 *    description: string,
 *    disabled?: boolean
 * }} Setting
 *
 * @typedef {{title: string, paragraphs?: string}} Section
 *
 * @typedef {{
 *    modal?: string,
 *    card?: string,
 *    title?: string,
 *    subtitle?: string
 * }} ClassNames
 */

/**
 *
 * @param {{
 *    settings: Setting[],
 *    open?: boolean,
 *    onClose: () => void,
 *    defaultValues?: Record<string, Acceptance>,
 *    title: string,
 *    subtitle: string,
 *    logo: {
 *      src: string,
 *      alt: string,
 *      dimensions: {width: number, height: number}
 *    },
 *    sections: Section[],
 *    variant?: "dialog" | "drawer",
 *    classNames?: ClassNames,
 *    onChange: (values: Record<string, Acceptance>) => void
 * }} param0
 */
function PrivacySettingsPanel(
  {
    settings,
    title,
    subtitle,
    logo,
    sections,
    open,
    defaultValues,
    variant,
    classNames,
    onChange,
    onClose,
  },
  ref
) {
  const [values, setValues] = useState(defaultValues || {});

  useImperativeHandle(ref, () => ({
    setValues,
  }));

  useEffect(() => {
    if (open) {
      setValues((values) => {
        if (!valuesMatch(values, defaultValues)) {
          return defaultValues;
        }
        return values;
      });
    }
  }, [open, defaultValues, setValues]);

  /**
   * sets acceptance value for a given setting
   */
  const onValueChange = useCallback(
    (id, acceptance) =>
      setValues((values) => {
        const out = { ...values };
        out[id] = acceptance;
        return out;
      }),
    [setValues]
  );

  /**
   * whether or not the form is submittable, i.e. all settings have an acceptance value selected
   */
  const submittable = useMemo(
    () =>
      hasAllValues(
        values,
        settings.map((s) => s.id)
      ),
    [settings, values]
  );

  /* handles clicking accept all button */
  const onAcceptAll = useCallback(() => {
    let out = {};
    for (const setting of settings) {
      out[setting.id] = "accepted";
    }
    setValues(out);
    onChange(out);
  }, [settings, onChange]);

  const onFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onChange(values);
    },
    [onChange, values]
  );

  let content = (
    <form onSubmit={onFormSubmit}>
      <Card
        title={title}
        subtitle={subtitle}
        action={
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.dimensions?.width}
            height={logo.dimensions?.height}
            className="object-contain max-w-full"
          />
        }
        classNames={{
          root: twClsx("bg-white max-w-2xl mx-auto", classNames?.card),
          title: twClsx("font-titleBold text-gray-700", classNames?.title),
          subtitle: twClsx(
            "font-title text-gray-500 text-sm",
            classNames?.subtitle
          ),
        }}
        footer={
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className={twClsx(
                "text-blue-400 text-sm p-2 font-titleBold",
                !submittable && "opacity-50"
              )}
              disabled={!submittable}
            >
              Conferma impostazioni
            </button>
            <button
              type="button"
              className={twClsx("text-green-700 text-sm p-2 font-titleBold")}
              onClick={onAcceptAll}
            >
              Accetta tutto
            </button>
          </div>
        }
      >
        {sections.map(({ title, paragraphs }, index) => (
          <section key={index} className="mb-6">
            <SectionTitle>{title}</SectionTitle>
            {paragraphs.map((par, parIndex) => (
              <SectionParagraph key={parIndex}>{par}</SectionParagraph>
            ))}
          </section>
        ))}
        {settings.map(({ id, name, description, disabled }) => {
          return (
            <section className="mb-6" key={id}>
              <SectionTitle>{name}</SectionTitle>
              <SectionParagraph>{description}</SectionParagraph>
              <div role="radiogroup" className="flex items-center justify-end">
                <Radio
                  checked={values[id] === "accepted"}
                  label="Abilitati"
                  key="accepted"
                  disabled={disabled}
                  ids={{
                    label: `${id}-accepted-label`,
                    radio: `${id}-accepted-radio`,
                  }}
                  className="mr-4"
                  onClick={() => onValueChange(id, "accepted")}
                />
                <Radio
                  checked={values[id] === "not_accepted"}
                  label="Disabilitati"
                  key="not_accepted"
                  disabled={disabled}
                  ids={{
                    label: `${id}-not-accepted-label`,
                    radio: `${id}-not-accepted-radio`,
                  }}
                  onClick={() => onValueChange(id, "not_accepted")}
                />
              </div>
            </section>
          );
        })}
      </Card>
    </form>
  );

  if (variant === "dialog") {
    return (
      <Modal
        open={open}
        className={twClsx("", classNames?.modal)}
        noBackdropDismissal
      >
        {content}
      </Modal>
    );
  } else {
    return (
      <Drawer
        open={open}
        className={twClsx("max-h-[75vh]", classNames?.modal)}
        noBackdropDismissal
      >
        {content}
      </Drawer>
    );
  }
}

export default memo(forwardRef(PrivacySettingsPanel));
