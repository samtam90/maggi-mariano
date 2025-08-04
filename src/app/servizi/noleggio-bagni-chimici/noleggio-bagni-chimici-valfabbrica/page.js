import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valfabbrica",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Valfabbrica", 
  locationNames: {label: "Valfabbrica", href: "valfabbrica"} 
});
