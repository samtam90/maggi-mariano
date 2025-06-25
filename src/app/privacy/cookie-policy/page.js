import { withConditionalRendering } from "@/misc/functions";

export const metadata = {
  title: "Cookie e storage Policy - Maggi Mariano Servizi Ecologici",
};

export default withConditionalRendering({
  Mobile: import("@/templates/CookiePolicy/alt/mobile"),
  Desktop: import("@/templates/CookiePolicy/alt/desktop"),
});
