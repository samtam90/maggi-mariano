import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Modena" });
export default withBaseProps({ 
    title: "Autospurgo Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});
