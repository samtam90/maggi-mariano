import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Città della Pieve" });
export default withBaseProps({ 
    title: "Pulizia fognature Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
