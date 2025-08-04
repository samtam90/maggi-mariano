import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Soci",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Soci", 
  locationNames: {label: "Soci", href: "soci"} 
});
