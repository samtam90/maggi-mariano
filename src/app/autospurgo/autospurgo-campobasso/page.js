import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Campobasso",
    canonical: links.autospurgo["campobasso"],
});
export default withBaseProps({ 
    title: "Autospurgo Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});
