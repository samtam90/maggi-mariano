import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sant'Anatolia di Narco",
    canonical: links.autospurgo["sant-anatolia-di-narco"],
});
export default withBaseProps({ 
    title: "Autospurgo Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
