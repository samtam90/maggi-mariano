import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vercelli",
    canonical: links.autospurgo["vercelli"],
});
export default withBaseProps({ 
    title: "Autospurgo Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
