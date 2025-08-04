import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bibbiena",
    canonical: links.autospurgo["bibbiena"],
});
export default withBaseProps({ 
    title: "Autospurgo Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});
