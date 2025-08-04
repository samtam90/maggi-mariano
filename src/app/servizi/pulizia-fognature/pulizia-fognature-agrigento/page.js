import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Agrigento" });
export default withBaseProps({ 
    title: "Pulizia fognature Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
