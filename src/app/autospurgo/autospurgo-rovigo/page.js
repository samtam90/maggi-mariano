import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rovigo",
    canonical: links.autospurgo["rovigo"],
});
export default withBaseProps({ 
    title: "Autospurgo Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
