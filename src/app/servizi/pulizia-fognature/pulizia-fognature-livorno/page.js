import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Livorno" });
export default withBaseProps({ 
    title: "Pulizia fognature Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
