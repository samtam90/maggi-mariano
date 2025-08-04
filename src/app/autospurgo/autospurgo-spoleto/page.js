import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Spoleto",
    canonical: links.autospurgo["spoleto"],
});
export default withBaseProps({ 
    title: "Autospurgo Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});
