import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Capolona" });
export default withBaseProps({ 
    title: "Pulizia fognature Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
