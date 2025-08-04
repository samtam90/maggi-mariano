import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Prato",
    canonical: links.autospurgo["prato"],
});
export default withBaseProps({ 
    title: "Autospurgo Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
