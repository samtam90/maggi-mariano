import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Trento" });
export default withBaseProps({ 
    title: "Pulizia fognature Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});
