import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Chieti" });
export default withBaseProps({ 
    title: "Pulizia fognature Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
