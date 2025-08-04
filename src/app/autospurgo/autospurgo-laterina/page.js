import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Laterina",
    canonical: links.autospurgo["laterina"],
});
export default withBaseProps({ 
    title: "Autospurgo Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
