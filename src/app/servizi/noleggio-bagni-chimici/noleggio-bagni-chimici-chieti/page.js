import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chieti",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Chieti", 
  locationNames: {label: "Chieti", href: "chieti"} 
});
