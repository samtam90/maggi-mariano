import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vinci",
    canonical: links.autospurgo["vinci"],
});
export default withBaseProps({ 
    title: "Autospurgo Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
