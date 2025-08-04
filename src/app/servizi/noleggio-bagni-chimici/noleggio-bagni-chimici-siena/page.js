import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Siena",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Siena", 
  locationNames: {label: "Siena", href: "siena"} 
});
