import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Badia Tedalda" });
export default withBaseProps({ 
    title: "Pulizia fognature Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});
