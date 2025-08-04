import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Capolona",
    canonical: links.autospurgo["capolona"],
});
export default withBaseProps({ 
    title: "Autospurgo Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
