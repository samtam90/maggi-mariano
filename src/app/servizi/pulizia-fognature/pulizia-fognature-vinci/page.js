import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Vinci" });
export default withBaseProps({ 
    title: "Pulizia fognature Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
