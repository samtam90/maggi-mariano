import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Castel Ritaldi" });
export default withBaseProps({ 
    title: "Pulizia fognature Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});
