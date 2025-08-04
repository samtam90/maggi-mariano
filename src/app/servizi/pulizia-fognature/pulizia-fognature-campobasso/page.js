import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Campobasso" });
export default withBaseProps({ 
    title: "Pulizia fognature Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});
