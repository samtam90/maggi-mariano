import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Savona",
    canonical: links.autospurgo["savona"],
});
export default withBaseProps({ 
    title: "Autospurgo Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
