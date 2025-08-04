import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Livorno",
    canonical: links.autospurgo["livorno"],
});
export default withBaseProps({ 
    title: "Autospurgo Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
