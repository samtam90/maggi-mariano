import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Catania",
    canonical: links.autospurgo["catania"],
});
export default withBaseProps({ 
    title: "Autospurgo Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});
