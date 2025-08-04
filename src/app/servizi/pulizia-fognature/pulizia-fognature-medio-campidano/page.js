import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Medio Campidano" });
export default withBaseProps({ 
    title: "Pulizia fognature Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
