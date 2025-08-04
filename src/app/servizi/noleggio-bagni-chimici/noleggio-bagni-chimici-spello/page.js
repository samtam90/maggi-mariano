import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Spello",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Spello", 
  locationNames: {label: "Spello", href: "spello"} 
});
