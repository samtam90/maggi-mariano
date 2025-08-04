import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lucignano",
    canonical: links.autospurgo["lucignano"],
});
export default withBaseProps({ 
    title: "Autospurgo Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
