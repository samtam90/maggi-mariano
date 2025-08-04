import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Marsciano",
    canonical: links.autospurgo["marsciano"],
});
export default withBaseProps({ 
    title: "Autospurgo Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});
