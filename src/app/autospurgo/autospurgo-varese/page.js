import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Varese",
    canonical: links.autospurgo["varese"],
});
export default withBaseProps({ 
    title: "Autospurgo Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
