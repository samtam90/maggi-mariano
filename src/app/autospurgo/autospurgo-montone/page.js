import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montone",
    canonical: links.autospurgo["montone"],
});
export default withBaseProps({ 
    title: "Autospurgo Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
