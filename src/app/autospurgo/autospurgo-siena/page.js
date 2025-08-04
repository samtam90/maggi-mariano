import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Siena",
    canonical: links.autospurgo["siena"],
});
export default withBaseProps({ 
    title: "Autospurgo Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
