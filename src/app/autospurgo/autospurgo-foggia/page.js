import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Foggia",
    canonical: links.autospurgo["foggia"],
});
export default withBaseProps({ 
    title: "Autospurgo Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
