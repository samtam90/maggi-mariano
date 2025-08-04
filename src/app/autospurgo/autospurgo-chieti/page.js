import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Chieti",
    canonical: links.autospurgo["chieti"],
});
export default withBaseProps({ 
    title: "Autospurgo Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
