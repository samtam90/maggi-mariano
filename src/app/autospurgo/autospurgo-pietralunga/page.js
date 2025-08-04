import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pietralunga",
    canonical: links.autospurgo["pietralunga"],
});
export default withBaseProps({ 
    title: "Autospurgo Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});
