import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Todi",
    canonical: links.autospurgo["todi"],
});
export default withBaseProps({ 
    title: "Autospurgo Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
