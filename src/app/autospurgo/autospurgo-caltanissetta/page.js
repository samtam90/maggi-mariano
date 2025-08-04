import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Caltanissetta",
    canonical: links.autospurgo["caltanissetta"],
});
export default withBaseProps({ 
    title: "Autospurgo Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});
