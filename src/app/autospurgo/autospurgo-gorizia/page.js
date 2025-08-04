import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Gorizia",
    canonical: links.autospurgo["gorizia"],
});
export default withBaseProps({ 
    title: "Autospurgo Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
