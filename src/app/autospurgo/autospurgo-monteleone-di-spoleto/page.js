import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monteleone di Spoleto",
    canonical: links.autospurgo["monteleone-di-spoleto"],
});
export default withBaseProps({ 
    title: "Autospurgo Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});
