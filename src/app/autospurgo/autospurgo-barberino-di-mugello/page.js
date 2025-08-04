import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Barberino di Mugello",
    canonical: links.autospurgo["barberino-di-mugello"],
});
export default withBaseProps({ 
    title: "Autospurgo Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});
