import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Corciano",
    canonical: links.autospurgo["corciano"],
});
export default withBaseProps({ 
    title: "Autospurgo Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});
