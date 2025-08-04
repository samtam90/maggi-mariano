import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Montaione" });
export default withBaseProps({ 
    title: "Pulizia fognature Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
