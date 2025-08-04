import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Soci",
    canonical: links.autospurgo["soci"],
});
export default withBaseProps({ 
    title: "Autospurgo Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
