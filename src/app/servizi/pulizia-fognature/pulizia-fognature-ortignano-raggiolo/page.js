import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ortignano Raggiolo" });
export default withBaseProps({ 
    title: "Pulizia fognature Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
