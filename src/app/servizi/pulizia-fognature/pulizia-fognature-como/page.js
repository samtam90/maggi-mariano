import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Como" });
export default withBaseProps({ 
    title: "Pulizia fognature Como", 
    locationNames: {label: "Como", href: "como"}  
});
