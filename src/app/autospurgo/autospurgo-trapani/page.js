import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Trapani",
    canonical: links.autospurgo["trapani"],
});
export default withBaseProps({ 
    title: "Autospurgo Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
