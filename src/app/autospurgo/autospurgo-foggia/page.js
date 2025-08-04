import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Foggia" });
export default withBaseProps({ 
    title: "Autospurgo Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
