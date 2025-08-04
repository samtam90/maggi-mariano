import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Soci" });
export default withBaseProps({ 
    title: "Pulizia fognature Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
