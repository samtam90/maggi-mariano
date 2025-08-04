import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Terni" });
export default withBaseProps({ 
    title: "Pulizia fognature Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
