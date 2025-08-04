import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lecce",
    canonical: links.autospurgo["lecce"],
});
export default withBaseProps({ 
    title: "Autospurgo Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
