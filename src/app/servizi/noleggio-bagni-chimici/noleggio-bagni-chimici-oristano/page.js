import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Oristano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Oristano", 
  locationNames: {label: "Oristano", href: "oristano"} 
});
