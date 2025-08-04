import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Mantova" });
export default withBaseProps({ 
    title: "Pulizia fognature Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
