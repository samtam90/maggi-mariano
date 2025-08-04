import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Torgiano",
    canonical: links.autospurgo["torgiano"],
});
export default withBaseProps({ 
    title: "Autospurgo Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});
