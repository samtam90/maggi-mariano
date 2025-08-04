import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Barberino di Mugello" });
export default withBaseProps({ 
    title: "Autospurgo Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});
