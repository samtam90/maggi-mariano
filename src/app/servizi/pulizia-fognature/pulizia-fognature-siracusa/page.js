import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Siracusa" });
export default withBaseProps({ 
    title: "Pulizia fognature Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});
