import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Torino",
    canonical: links.autospurgo["torino"],
});
export default withBaseProps({ 
    title: "Autospurgo Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
