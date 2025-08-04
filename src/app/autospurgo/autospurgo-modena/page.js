import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Modena",
    canonical: links.autospurgo["modena"],
});
export default withBaseProps({ 
    title: "Autospurgo Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});
