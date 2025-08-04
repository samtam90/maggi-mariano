import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Scandicci" });
export default withBaseProps({ 
    title: "Pulizia fognature Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});
