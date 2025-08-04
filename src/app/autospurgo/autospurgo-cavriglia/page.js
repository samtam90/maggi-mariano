import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cavriglia",
    canonical: links.autospurgo["cavriglia"],
});
export default withBaseProps({ 
    title: "Autospurgo Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});
