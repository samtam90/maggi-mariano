import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pordenone",
    canonical: links.autospurgo["pordenone"],
});
export default withBaseProps({ 
    title: "Autospurgo Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});
