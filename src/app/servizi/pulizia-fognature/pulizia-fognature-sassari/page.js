import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Sassari" });
export default withBaseProps({ 
    title: "Pulizia fognature Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});
