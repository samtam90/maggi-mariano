import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Londa",
    canonical: links.autospurgo["londa"],
});
export default withBaseProps({ 
    title: "Autospurgo Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
