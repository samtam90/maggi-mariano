import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Corciano" });
export default withBaseProps({ 
    title: "Pulizia fognature Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});
