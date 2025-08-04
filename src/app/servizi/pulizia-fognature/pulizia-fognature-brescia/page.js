import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Brescia" });
export default withBaseProps({ 
    title: "Pulizia fognature Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
