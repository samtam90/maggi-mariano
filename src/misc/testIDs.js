/**
 * @type {{
 *   contactForm: {
 *     input: (inputId: string) => string
 *   }
 * }}
 */
const testIDs = {
  contactForm: {
    input: (inputId) => `contact-form-input-${inputId}`,
  },
};

export default testIDs;
