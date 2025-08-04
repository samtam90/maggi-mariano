import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Deruta",
    canonical: links.autospurgo["deruta"],
});
export default withBaseProps({ 
    title: "Autospurgo Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});
