import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Poggiodomo",
    canonical: links.autospurgo["poggiodomo"],
});
export default withBaseProps({ 
    title: "Autospurgo Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});
