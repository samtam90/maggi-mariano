import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ragusa",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ragusa", 
  locationNames: {label: "Ragusa", href: "ragusa"} 
});
