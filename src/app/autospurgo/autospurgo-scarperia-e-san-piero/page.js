import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Scarperia e San Piero",
    canonical: links.autospurgo["scarperia-e-san-piero"],
});
export default withBaseProps({ 
    title: "Autospurgo Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});
