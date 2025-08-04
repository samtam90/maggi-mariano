import { withConditionalRendering } from "@/misc/functions";
import { links } from "../../../../app.config";

export const metadata = {
  title: "Privacy Policy - Maggi Mariano Servizi Ecologici",
  alternates: {
    canonical: links.privacy["privacy-policy"],
  },
};

export default withConditionalRendering({
  Mobile: import("@/templates/PrivacyPolicy/alt/mobile"),
  Desktop: import("@/templates/PrivacyPolicy/alt/desktop"),
});
