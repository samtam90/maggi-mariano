import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Chitignano" });
export default withBaseProps({ 
    title: "Pulizia fognature Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});
