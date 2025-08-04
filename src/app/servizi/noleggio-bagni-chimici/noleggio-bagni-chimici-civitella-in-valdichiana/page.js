import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Civitella in Valdichiana",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Civitella in Valdichiana", 
  locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"} 
});
