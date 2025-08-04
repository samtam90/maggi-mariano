import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Bergamo" });
export default withBaseProps({ 
    title: "Pulizia fognature Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
