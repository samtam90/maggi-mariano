import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Laterina" });
export default withBaseProps({ 
    title: "Pulizia fognature Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
