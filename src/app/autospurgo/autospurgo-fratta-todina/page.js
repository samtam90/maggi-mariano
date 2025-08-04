import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Fratta Todina",
    canonical: links.autospurgo["fratta-todina"],
});
export default withBaseProps({ 
    title: "Autospurgo Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"}  
});
