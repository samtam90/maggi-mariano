import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Civitella in Valdichiana",
});
export default withBaseProps({ 
    title: "Trasporto acqua Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});