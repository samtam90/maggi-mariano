import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Varese" });
export default withBaseProps({ 
    title: "Autospurgo Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
