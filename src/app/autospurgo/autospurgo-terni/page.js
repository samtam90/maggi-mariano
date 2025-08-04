import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Terni",
    canonical: links.autospurgo["terni"],
});
export default withBaseProps({ 
    title: "Autospurgo Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
