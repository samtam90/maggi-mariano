import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Valfabbrica",
    canonical: links.autospurgo["valfabbrica"],
});
export default withBaseProps({ 
    title: "Autospurgo Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
