import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Torgiano" });
export default withBaseProps({ 
    title: "Pulizia fognature Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});
