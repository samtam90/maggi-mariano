import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Fermo",
    canonical: links.autospurgo["fermo"],
});
export default withBaseProps({ 
    title: "Autospurgo Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
