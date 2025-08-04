import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Pavia" });
export default withBaseProps({ 
    title: "Pulizia fognature Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});
