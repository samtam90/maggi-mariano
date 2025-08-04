import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Greve in Chianti" });
export default withBaseProps({ 
    title: "Pulizia fognature Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});
