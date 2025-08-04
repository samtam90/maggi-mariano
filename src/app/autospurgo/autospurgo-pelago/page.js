import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pelago",
    canonical: links.autospurgo["pelago"],
});
export default withBaseProps({ 
    title: "Autospurgo Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});
