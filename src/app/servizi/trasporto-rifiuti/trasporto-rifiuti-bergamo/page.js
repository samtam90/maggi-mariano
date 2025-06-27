import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bergamo",
});
export default withBaseProps({ title: "Trasporto rifiuti Bergamo" });
