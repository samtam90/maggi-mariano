import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Prato" });
export default withBaseProps({ 
    title: "Pulizia fognature Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
