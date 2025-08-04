import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Matera",
    canonical: links.autospurgo["matera"],
});
export default withBaseProps({ 
    title: "Autospurgo Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});
