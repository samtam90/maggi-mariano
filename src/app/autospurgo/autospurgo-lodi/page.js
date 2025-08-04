import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lodi",
    canonical: links.autospurgo["lodi"],
});
export default withBaseProps({ 
    title: "Autospurgo Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});
