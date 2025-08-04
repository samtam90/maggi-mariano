import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Frosinone",
    canonical: links.autospurgo["frosinone"],
});
export default withBaseProps({ 
    title: "Autospurgo Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});
