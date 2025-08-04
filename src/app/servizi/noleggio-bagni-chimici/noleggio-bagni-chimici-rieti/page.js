import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rieti",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rieti", 
  locationNames: {label: "Rieti", href: "rieti"} 
});
