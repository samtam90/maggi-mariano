import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cortona",
    canonical: links.autospurgo["cortona"],
});
export default withBaseProps({ 
    title: "Autospurgo Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});
