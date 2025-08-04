import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Livorno" });
export default withBaseProps({ 
    title: "Autospurgo Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
