import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo La Spezia",
    canonical: links.autospurgo["la-spezia"],
});
export default withBaseProps({ 
    title: "Autospurgo La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
