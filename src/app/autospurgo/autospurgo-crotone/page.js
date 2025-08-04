import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Crotone",
    canonical: links.autospurgo["crotone"],
});
export default withBaseProps({ 
    title: "Autospurgo Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});
