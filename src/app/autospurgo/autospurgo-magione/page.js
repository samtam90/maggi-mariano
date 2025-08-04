import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Magione",
    canonical: links.autospurgo["magione"],
});
export default withBaseProps({ 
    title: "Autospurgo Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
