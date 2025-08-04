import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Foiano in Valdichiana",
});
export default withBaseProps({ 
    title: "Trasporto acqua Foiano in Valdichiana", 
    locationNames: {label: "Foiano in Valdichiana", href: "foiano-in-valdichiana"}  
});