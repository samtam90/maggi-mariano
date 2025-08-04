import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rassina",
    canonical: links.autospurgo["rassina"],
});
export default withBaseProps({ 
    title: "Autospurgo Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});
