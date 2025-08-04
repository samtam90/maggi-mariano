import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Udine" });
export default withBaseProps({ 
    title: "Pulizia fognature Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
