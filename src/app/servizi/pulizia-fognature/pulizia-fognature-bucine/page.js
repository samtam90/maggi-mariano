import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Bucine" });
export default withBaseProps({ 
    title: "Pulizia fognature Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});
