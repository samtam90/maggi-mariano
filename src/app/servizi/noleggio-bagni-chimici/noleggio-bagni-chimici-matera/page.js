import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Matera",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Matera", 
  locationNames: {label: "Matera", href: "matera"} 
});
