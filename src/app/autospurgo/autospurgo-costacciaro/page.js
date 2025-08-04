import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Costacciaro",
    canonical: links.autospurgo["costacciaro"],
});
export default withBaseProps({ 
    title: "Autospurgo Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
