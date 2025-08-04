import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Varese" });
export default withBaseProps({ 
    title: "Pulizia fognature Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
