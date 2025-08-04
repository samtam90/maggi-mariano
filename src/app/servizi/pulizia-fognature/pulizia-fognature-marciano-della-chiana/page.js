import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Marciano della Chiana" });
export default withBaseProps({ 
    title: "Pulizia fognature Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});
