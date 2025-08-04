import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Lucca" });
export default withBaseProps({ 
    title: "Pulizia fognature Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});
