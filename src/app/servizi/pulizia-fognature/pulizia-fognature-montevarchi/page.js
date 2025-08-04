import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Montevarchi" });
export default withBaseProps({ 
    title: "Pulizia fognature Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
