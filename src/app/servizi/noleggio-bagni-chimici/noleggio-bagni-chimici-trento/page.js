import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trento",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trento", 
  locationNames: {label: "Trento", href: "trento"} 
});
