import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bergamo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bergamo", 
  locationNames: {label: "Bergamo", href: "bergamo"} 
});
