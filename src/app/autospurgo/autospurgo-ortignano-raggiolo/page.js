import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ortignano Raggiolo",
    canonical: links.autospurgo["ortignano-raggiolo"],
});
export default withBaseProps({ 
    title: "Autospurgo Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
