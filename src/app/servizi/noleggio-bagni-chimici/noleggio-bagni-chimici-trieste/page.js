import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trieste",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trieste", 
  locationNames: {label: "Trieste", href: "trieste"} 
});
