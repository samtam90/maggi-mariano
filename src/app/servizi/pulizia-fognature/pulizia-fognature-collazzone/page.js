import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Collazzone" });
export default withBaseProps({ 
    title: "Pulizia fognature Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
