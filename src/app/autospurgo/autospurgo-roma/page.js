import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Roma",
    canonical: links.autospurgo["roma"],
});
export default withBaseProps({ 
    title: "Autospurgo Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});
