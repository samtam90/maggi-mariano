import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Vallo di Nera" });
export default withBaseProps({ 
    title: "Pulizia fognature Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
