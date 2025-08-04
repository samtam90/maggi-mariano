import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Caserta",
    canonical: links.autospurgo["caserta"],
});
export default withBaseProps({ 
    title: "Autospurgo Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
