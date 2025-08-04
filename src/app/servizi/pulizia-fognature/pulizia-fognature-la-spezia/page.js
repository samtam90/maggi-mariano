import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature La Spezia" });
export default withBaseProps({ 
    title: "Pulizia fognature La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
