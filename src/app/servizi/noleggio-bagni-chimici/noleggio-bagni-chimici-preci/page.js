import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Preci",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Preci", 
  locationNames: {label: "Preci", href: "preci"} 
});
