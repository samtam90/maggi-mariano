import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Palermo",
    canonical: links.autospurgo["palermo"],
});
export default withBaseProps({ 
    title: "Autospurgo Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
