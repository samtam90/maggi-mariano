import React, { memo } from "react";
import AuxTemplate from "../auxiliary/AuxTemplate";
import ContactForm, { ContactFormData } from "../../components/ContactForm";
import { components } from "@italwebcom/tailwind-components";
import { getFormSubmitLabel } from "../../components/ContactSection";
import tailwindConfig from "../../../tailwind.config";
import { InnerNavBarItem } from "../../components/NavBar";

const { BorderedColoredText } = components;

function ContactItem({ title, subtitle, icon, href }) {
  return;
}

/**
 * @typedef {{
 *    title: string,
 *    subtitle: string | ReactNode,
 *    icon: ReactNode,
 *    href: string
 * }} ContactItem
 * @param {{
 *    mobile: boolean,
 *    title: string,
 *    formTitle: string,
 *    items: ContactItem[],
 *    onContactFormSubmit: (data: ContactFormData) => void
 * }} param0
 * @returns
 */
function ContactsTemplate({
  mobile,
  items,
  title,
  formTitle,
  onContactFormSubmit,
}) {
  //TODO: render
  return (
    <AuxTemplate
      mobile={mobile}
      className="max-w-6xl mx-auto px-4 lg:px-0 py-6 lg:py-12"
    >
      <BorderedColoredText
        left={title.left}
        right={title.right}
        fillColor={tailwindConfig.theme.extend.colors.red.primary}
        classNames={{
          text: "text-red-primary text-center",
          rightContainer:
            "text-white text-sm lg:text-2xl block lg:inline-block",
          leftContainer: "block lg:inline-block",
          root: "text-md lg:text-2xl block lg:inline-block mb-12",
        }}
      />
      <div className="block lg:flex">
        <section
          key="contact-items"
          className="basis-2/5 shrink-0 mb-12 lg:mb-0"
        >
          <ul className="lg:-mb-6">
            {items.map(({ icon, title, subtitle, href }) => (
              <li className="mb-6" key={title}>
                <InnerNavBarItem
                  icon={icon}
                  title={title}
                  label={subtitle}
                  href={href}
                  classNames={{
                    title:
                      "font-titleBold text-sm lg:text-md text-gray-700 uppercase mb-1 group-hover:text-red-primary",
                    label: "font-title text-sm lg:text-md text-gray-600",
                    icon: "text-gray-700 text-lg lg:text-xl mr-3 group-hover:text-red-primary",
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
        <section key="contact-form" className="basis-3/5 shrink-0">
          <ContactForm
            onSubmit={onContactFormSubmit}
            title={formTitle}
            getSubmitLabel={getFormSubmitLabel}
          />
        </section>
      </div>
    </AuxTemplate>
  );
}

export default memo(ContactsTemplate);
