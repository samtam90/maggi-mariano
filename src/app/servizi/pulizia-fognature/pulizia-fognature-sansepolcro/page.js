import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Sansepolcro" });
export default withBaseProps({ 
    title: "Pulizia fognature Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});
