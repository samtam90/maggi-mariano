import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Chitignano",
    canonical: links.autospurgo["chitignano"],
});
export default withBaseProps({ 
    title: "Autospurgo Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});
