import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Teramo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Teramo", 
  locationNames: {label: "Teramo", href: "teramo"} 
});
