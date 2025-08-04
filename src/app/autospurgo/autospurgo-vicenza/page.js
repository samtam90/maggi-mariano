import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vicenza",
    canonical: links.autospurgo["vicenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});
