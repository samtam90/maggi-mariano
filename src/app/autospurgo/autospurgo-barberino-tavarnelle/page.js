import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Barberino Tavarnelle",
    canonical: links.autospurgo["barberino-tavarnelle"],
});
export default withBaseProps({ 
    title: "Autospurgo Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});
