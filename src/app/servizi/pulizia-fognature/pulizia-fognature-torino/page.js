import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Torino" });
export default withBaseProps({ 
    title: "Pulizia fognature Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
