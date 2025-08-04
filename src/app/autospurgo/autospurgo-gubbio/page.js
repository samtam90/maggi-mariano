import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Gubbio",
    canonical: links.autospurgo["gubbio"],
});
export default withBaseProps({ 
    title: "Autospurgo Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
