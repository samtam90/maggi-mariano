import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pistoia",
    canonical: links.autospurgo["pistoia"],
});
export default withBaseProps({ 
    title: "Autospurgo Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
