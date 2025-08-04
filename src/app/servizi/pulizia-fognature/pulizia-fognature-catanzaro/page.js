import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Catanzaro" });
export default withBaseProps({ 
    title: "Pulizia fognature Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
