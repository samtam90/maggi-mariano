import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Valtopina",
    canonical: links.autospurgo["valtopina"],
});
export default withBaseProps({ 
    title: "Autospurgo Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});
