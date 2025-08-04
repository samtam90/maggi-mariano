import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Talla",
    canonical: links.autospurgo["talla"],
});
export default withBaseProps({ 
    title: "Autospurgo Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});
