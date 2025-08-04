import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Piegaro",
    canonical: links.autospurgo["piegaro"],
});
export default withBaseProps({ 
    title: "Autospurgo Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
