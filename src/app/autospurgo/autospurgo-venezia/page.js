import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Venezia" });
export default withBaseProps({ 
    title: "Autospurgo Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
