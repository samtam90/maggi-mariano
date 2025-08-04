import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Todi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Todi", 
  locationNames: {label: "Todi", href: "todi"} 
});
