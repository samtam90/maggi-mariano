import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Civitella in Valdichiana",
    canonical: links.autospurgo["civitella-in-valdichiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});
