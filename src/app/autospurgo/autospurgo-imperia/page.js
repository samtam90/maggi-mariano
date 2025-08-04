import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Imperia",
    canonical: links.autospurgo["imperia"],
});
export default withBaseProps({ 
    title: "Autospurgo Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
