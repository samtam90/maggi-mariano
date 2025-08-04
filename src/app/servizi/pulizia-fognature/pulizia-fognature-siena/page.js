import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Siena" });
export default withBaseProps({ 
    title: "Pulizia fognature Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
