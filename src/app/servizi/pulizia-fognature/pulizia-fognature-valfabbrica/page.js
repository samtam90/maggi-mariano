import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Valfabbrica" });
export default withBaseProps({ 
    title: "Pulizia fognature Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
