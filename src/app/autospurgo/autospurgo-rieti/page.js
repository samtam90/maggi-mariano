import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rieti",
    canonical: links.autospurgo["rieti"],
});
export default withBaseProps({ 
    title: "Autospurgo Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
