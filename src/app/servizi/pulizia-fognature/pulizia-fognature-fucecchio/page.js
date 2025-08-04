import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Fucecchio" });
export default withBaseProps({ 
    title: "Pulizia fognature Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});
