import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Poppi",
    canonical: links.autospurgo["poppi"],
});
export default withBaseProps({ 
    title: "Autospurgo Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});
