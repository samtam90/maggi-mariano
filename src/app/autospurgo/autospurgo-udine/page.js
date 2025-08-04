import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Udine",
    canonical: links.autospurgo["udine"],
});
export default withBaseProps({ 
    title: "Autospurgo Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
