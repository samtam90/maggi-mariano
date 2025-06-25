import { withConditionalRendering } from "@/misc/functions";

export const metadata = {
  title: "Privacy Policy - Maggi Mariano Servizi Ecologici",
};

export default withConditionalRendering({
  Mobile: import("@/templates/PrivacyPolicy/alt/mobile"),
  Desktop: import("@/templates/PrivacyPolicy/alt/desktop"),
});
