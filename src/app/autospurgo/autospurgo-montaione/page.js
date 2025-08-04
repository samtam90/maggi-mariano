import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montaione",
    canonical: links.autospurgo["montaione"],
});
export default withBaseProps({ 
    title: "Autospurgo Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
