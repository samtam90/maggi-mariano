/**
 * @type {{
 *   contactForm: {
 *     form: {
 *        input: (inputId: string) => string
 *     }
 *   }
 * }}
 */
const testIDs = {
  contactForm: {
    form: {
      input: (inputId) => `contact-form-input-${inputId}`
    },
  },
};

export default testIDs;
