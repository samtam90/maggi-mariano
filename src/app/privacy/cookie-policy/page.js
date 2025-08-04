import { withConditionalRendering } from "@/misc/functions";
import { links } from "../../../../app.config";

export const metadata = {
  title: "Cookie e storage Policy - Maggi Mariano Servizi Ecologici",
  alternates: {
    canonical: links.privacy["cookie-policy"],
  },
};

export default withConditionalRendering({
  Mobile: import("@/templates/CookiePolicy/alt/mobile"),
  Desktop: import("@/templates/CookiePolicy/alt/desktop"),
});
