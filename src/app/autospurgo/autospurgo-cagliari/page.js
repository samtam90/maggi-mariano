import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cagliari",
    canonical: links.autospurgo["cagliari"],
});
export default withBaseProps({ 
    title: "Autospurgo Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});
