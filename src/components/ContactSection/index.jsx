import React, { memo } from "react";
import ContactForm, { ContactFormData } from "../ContactForm";
import { renderHeader, twClsx } from "../../misc/functions";
import { HeaderComponent } from "../../misc/functions";
import Link from "next/link";

const TopBackdrop = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.5 19.6"
    preserveAspectRatio="none"
  >
    <path
      className="opacity-33 fill-white"
      d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
    ></path>
    <path
      className="opacity-33 fill-white"
      d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
    ></path>
    <path
      className="opacity-33 fill-white"
      d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
    ></path>
    <path
      className="fill-white"
      d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
    ></path>
  </svg>
));

function getFormSubmitLabel(status) {
  return status === "success" ? "Success" : "Submit";
}

/**
 * @typedef {{
 *   root?: string,
 *   contentWrapper?: string,
 *   title?: string,
 *   phoneNumbersTitle?: string,
 *   phoneNumber?: string,
 *   preTitle?: string,
 *   content?: string,
 *   image?: string,
 *   form?: {
 *     title?: string
 *   },
 * }} ClassNames
 *
 * @typedef {{label: string, href: string}} PhoneNumber
 *
 * @typedef {{
 *   form: {
 *     input: (inputId: string) => string
 *   }
 * }} IDs
 *
 * @typedef {{alt: string, src: string}} Image
 *
 * @typedef {{
 *   preTitle?: string,
 *   title: string,
 *   phoneNumbers: PhoneNumber[]
 *   content: string,
 *   images: Image[],
 *   formTitle: string,
 *   onFormSubmit: (data: ContactFormData) => void,
 *   classNames?: ClassNames,
 *   variant?: "horizontal" | "vertical",
 *   titleHeadingElement?: HeaderComponent,
 *   ids?: IDs,
 *   imageDimensions: {width: number, height: number}
 * }} ContactSectionProps
 */

/**
 * @returns
 * @param {ContactSectionProps} param0
 */
function ContactSection({
  preTitle,
  title,
  phoneNumbers,
  content,
  images,
  formTitle,
  onFormSubmit,
  classNames,
  variant = "horizontal",
  titleHeadingElement,
  ids,
  imageDimensions,
}) {
  const isHorizVariant = variant === "horizontal";
  return (
    <section className={twClsx("bg-yellow-light", classNames?.root)}>
      <TopBackdrop />
      <div
        className={twClsx(
          "font-title text-md lg:text-lg text-gray-600 max-w-8xl mx-auto p-4 pb-8 lg:px-0",
          isHorizVariant && "grid grid-cols-2 gap-8",
          classNames?.contentWrapper
        )}
      >
        <div className={twClsx(!isHorizVariant && "mb-6")}>
          {preTitle && (
            <p
              className={twClsx(
                "text-center mb-3 uppercase text-sm lg:text-lg",
                classNames?.preTitle
              )}
            >
              {preTitle}
            </p>
          )}
          {renderHeader(titleHeadingElement, title, {
            className: twClsx(
              "font-titleBold py-4 bg-red-primary text-center text-white text-lg lg:text-2xl mb-6 uppercase",
              classNames?.title
            ),
          })}
          <p
            className={twClsx(
              "font-titleBold text-center mb-2 lg:mb-1 uppercase",
              classNames?.phoneNumbersTitle
            )}
          >
            Puoi contattarci ai numeri
          </p>
          <nav className="flex flex-col lg:flex-row mb-6 justify-center items-center">
            {phoneNumbers.map((phoneNumber) => (
              <Link
                href={phoneNumber.href}
                className={twClsx(
                  "font-titleBold text-red-primary text-lg lg:text-2xl hover:underline mb-1 lg:mr-3 lg:mb-0 last:mb-0 last:mr-0",
                  classNames?.phoneNumber
                )}
              >
                {phoneNumber.label}
              </Link>
            ))}
          </nav>
          <p className={twClsx("mb-6 text-sm lg:text-md", classNames?.content)}>
            {content}
          </p>
          <aside className={twClsx(isHorizVariant && "grid grid-cols-2 gap-4")}>
            {images.map(({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                width={imageDimensions.width}
                height={imageDimensions.height}
                className={twClsx(
                  "max-w-full object-cover",
                  !isHorizVariant && "mb-3"
                )}
              />
            ))}
          </aside>
        </div>
        <ContactForm
          title={formTitle}
          onSubmit={onFormSubmit}
          ids={ids?.form}
          getSubmitLabel={getFormSubmitLabel}
          classNames={{
            root: twClsx(
              "border border-gray-400 shadow-sm rounded-lg p-4 py-6"
            ),
            title: "text-sm lg:text-md"
          }}
        />
      </div>
    </section>
  );
}

export default memo(ContactSection);
