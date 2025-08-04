import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature [name]" });
export default withBaseProps({ 
    title: "Pulizia fognature [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
