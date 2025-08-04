import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Prato",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Prato", 
  locationNames: {label: "Prato", href: "prato"} 
});
