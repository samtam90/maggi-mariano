import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Taranto" });
export default withBaseProps({ 
    title: "Pulizia fognature Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
