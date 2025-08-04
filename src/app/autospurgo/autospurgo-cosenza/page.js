import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cosenza",
    canonical: links.autospurgo["cosenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
