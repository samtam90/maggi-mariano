import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Siena" });
export default withBaseProps({ 
    title: "Autospurgo Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
