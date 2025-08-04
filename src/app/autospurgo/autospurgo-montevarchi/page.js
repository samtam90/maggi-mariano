import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montevarchi",
    canonical: links.autospurgo["montevarchi"],
});
export default withBaseProps({ 
    title: "Autospurgo Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
