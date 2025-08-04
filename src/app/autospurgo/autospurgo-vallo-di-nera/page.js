import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Vallo di Nera" });
export default withBaseProps({ 
    title: "Autospurgo Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
