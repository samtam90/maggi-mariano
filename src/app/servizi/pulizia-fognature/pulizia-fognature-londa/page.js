import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Londa" });
export default withBaseProps({ 
    title: "Pulizia fognature Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
