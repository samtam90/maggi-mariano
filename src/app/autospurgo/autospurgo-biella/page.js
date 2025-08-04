import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Biella",
    canonical: links.autospurgo["biella"],
});
export default withBaseProps({ 
    title: "Autospurgo Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
