import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Biella" });
export default withBaseProps({ 
    title: "Pulizia fognature Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
