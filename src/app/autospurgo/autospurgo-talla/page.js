import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Talla" });
export default withBaseProps({ 
    title: "Autospurgo Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});
