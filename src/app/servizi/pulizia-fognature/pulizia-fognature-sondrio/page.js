import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Sondrio" });
export default withBaseProps({ 
    title: "Pulizia fognature Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});
