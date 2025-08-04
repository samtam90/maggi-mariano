import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Trevi" });
export default withBaseProps({ 
    title: "Pulizia fognature Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});
