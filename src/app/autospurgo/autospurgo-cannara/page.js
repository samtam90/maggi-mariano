import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cannara",
    canonical: links.autospurgo["cannara"],
});
export default withBaseProps({ 
    title: "Autospurgo Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
