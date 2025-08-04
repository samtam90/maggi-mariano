import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Rieti" });
export default withBaseProps({ 
    title: "Pulizia fognature Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
