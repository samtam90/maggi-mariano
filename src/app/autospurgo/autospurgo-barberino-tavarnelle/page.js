import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Barberino Tavarnelle" });
export default withBaseProps({ 
    title: "Autospurgo Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});
