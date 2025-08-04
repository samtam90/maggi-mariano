import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Agrigento",
    canonical: links.autospurgo["agrigento"],
});
export default withBaseProps({ 
    title: "Autospurgo Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
