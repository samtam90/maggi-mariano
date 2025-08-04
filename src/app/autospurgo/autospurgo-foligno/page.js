import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Foligno",
    canonical: links.autospurgo["foligno"],
});
export default withBaseProps({ 
    title: "Autospurgo Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
