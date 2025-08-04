import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Castelfiorentino" });
export default withBaseProps({ 
    title: "Pulizia fognature Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});
