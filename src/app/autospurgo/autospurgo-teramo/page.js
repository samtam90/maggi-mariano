import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Teramo",
    canonical: links.autospurgo["teramo"],
});
export default withBaseProps({ 
    title: "Autospurgo Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});
