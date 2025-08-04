import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montemignaio",
    canonical: links.autospurgo["montemignaio"],
});
export default withBaseProps({ 
    title: "Autospurgo Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
