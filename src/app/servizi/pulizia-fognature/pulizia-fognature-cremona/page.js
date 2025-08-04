import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Cremona" });
export default withBaseProps({ 
    title: "Pulizia fognature Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
