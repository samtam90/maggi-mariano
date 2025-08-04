import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Piacenza",
    canonical: links.autospurgo["piacenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
