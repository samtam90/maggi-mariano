import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Ritaldi",
    canonical: links.autospurgo["castel-ritaldi"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});
