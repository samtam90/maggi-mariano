import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Potenza",
    canonical: links.autospurgo["potenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});
