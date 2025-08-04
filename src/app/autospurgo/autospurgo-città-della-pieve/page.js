import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Città della Pieve",
    canonical: links.autospurgo["città-della-pieve"],
});
export default withBaseProps({ 
    title: "Autospurgo Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
