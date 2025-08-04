import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Foiano in Valdichiana" });
export default withBaseProps({ 
    title: "Pulizia fognature Foiano in Valdichiana", 
    locationNames: {label: "Foiano in Valdichiana", href: "foiano-in-valdichiana"}  
});
