import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Todi" });
export default withBaseProps({ 
    title: "Pulizia fognature Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
