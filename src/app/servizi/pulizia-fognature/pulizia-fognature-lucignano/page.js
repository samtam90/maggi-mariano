import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Lucignano" });
export default withBaseProps({ 
    title: "Pulizia fognature Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
