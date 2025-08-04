import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vicchio",
    canonical: links.autospurgo["vicchio"],
});
export default withBaseProps({ 
    title: "Autospurgo Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});
