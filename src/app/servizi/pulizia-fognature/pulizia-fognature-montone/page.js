import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Montone" });
export default withBaseProps({ 
    title: "Pulizia fognature Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
