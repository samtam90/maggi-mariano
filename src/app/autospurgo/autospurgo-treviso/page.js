import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Treviso",
    canonical: links.autospurgo["treviso"],
});
export default withBaseProps({ 
    title: "Autospurgo Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
