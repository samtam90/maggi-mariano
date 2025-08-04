import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ragusa" });
export default withBaseProps({ 
    title: "Pulizia fognature Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
