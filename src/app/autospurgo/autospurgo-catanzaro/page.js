import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Catanzaro",
    canonical: links.autospurgo["catanzaro"],
});
export default withBaseProps({ 
    title: "Autospurgo Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
