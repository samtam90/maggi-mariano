import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Capraia e Limite",
    canonical: links.autospurgo["capraia-e-limite"],
});
export default withBaseProps({ 
    title: "Autospurgo Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});
