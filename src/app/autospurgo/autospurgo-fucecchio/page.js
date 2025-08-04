import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Fucecchio",
    canonical: links.autospurgo["fucecchio"],
});
export default withBaseProps({ 
    title: "Autospurgo Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});
