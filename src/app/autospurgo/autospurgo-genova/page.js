import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Genova",
    canonical: links.autospurgo["genova"],
});
export default withBaseProps({ 
    title: "Autospurgo Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});
