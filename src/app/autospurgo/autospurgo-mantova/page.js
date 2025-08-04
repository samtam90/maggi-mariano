import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Mantova",
    canonical: links.autospurgo["mantova"],
});
export default withBaseProps({ 
    title: "Autospurgo Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
