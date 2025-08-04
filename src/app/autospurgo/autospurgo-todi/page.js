import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Todi" });
export default withBaseProps({ 
    title: "Autospurgo Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
