import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monterchi",
    canonical: links.autospurgo["monterchi"],
});
export default withBaseProps({ 
    title: "Autospurgo Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});
