import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sigillo",
    canonical: links.autospurgo["sigillo"],
});
export default withBaseProps({ 
    title: "Autospurgo Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
