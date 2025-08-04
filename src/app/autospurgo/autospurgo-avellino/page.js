import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Avellino",
    canonical: links.autospurgo["avellino"],
});
export default withBaseProps({ 
    title: "Autospurgo Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
