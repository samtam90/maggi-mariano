import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foiano in Valdichiana",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foiano in Valdichiana", 
    locationNames: {label: "Foiano in Valdichiana", href: "foiano-in-valdichiana"}  
});