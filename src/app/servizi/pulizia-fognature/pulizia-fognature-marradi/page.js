import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Marradi" });
export default withBaseProps({ 
    title: "Pulizia fognature Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
