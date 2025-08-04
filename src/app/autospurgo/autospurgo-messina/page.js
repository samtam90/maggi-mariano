import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Messina",
    canonical: links.autospurgo["messina"],
});
export default withBaseProps({ 
    title: "Autospurgo Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});
