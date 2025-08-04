import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Venezia",
    canonical: links.autospurgo["venezia"],
});
export default withBaseProps({ 
    title: "Autospurgo Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
