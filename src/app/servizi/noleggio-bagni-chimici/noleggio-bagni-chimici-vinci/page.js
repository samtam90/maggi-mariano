import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vinci",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vinci", 
  locationNames: {label: "Vinci", href: "vinci"} 
});
