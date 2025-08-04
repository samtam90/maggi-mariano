import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Magione" });
export default withBaseProps({ 
    title: "Pulizia fognature Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
