import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Oristano" });
export default withBaseProps({ 
    title: "Pulizia fognature Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
