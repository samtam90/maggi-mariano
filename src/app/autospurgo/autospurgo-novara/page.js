import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Novara",
    canonical: links.autospurgo["novara"],
});
export default withBaseProps({ 
    title: "Autospurgo Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
