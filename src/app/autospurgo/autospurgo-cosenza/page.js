import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cosenza" });
export default withBaseProps({ 
    title: "Autospurgo Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
