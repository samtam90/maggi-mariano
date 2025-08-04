import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marradi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marradi", 
  locationNames: {label: "Marradi", href: "marradi"} 
});
