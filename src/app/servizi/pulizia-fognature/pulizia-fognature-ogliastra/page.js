import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ogliastra" });
export default withBaseProps({ 
    title: "Pulizia fognature Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
