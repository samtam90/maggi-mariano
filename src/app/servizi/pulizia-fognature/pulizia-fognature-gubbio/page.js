import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Gubbio" });
export default withBaseProps({ 
    title: "Pulizia fognature Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
