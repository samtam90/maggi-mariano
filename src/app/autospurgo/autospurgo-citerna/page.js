import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Citerna",
    canonical: links.autospurgo["citerna"],
});
export default withBaseProps({ 
    title: "Autospurgo Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});
