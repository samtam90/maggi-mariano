import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Palermo" });
export default withBaseProps({ 
    title: "Pulizia fognature Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
