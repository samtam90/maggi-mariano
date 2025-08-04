import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ogliastra",
    canonical: links.autospurgo["ogliastra"],
});
export default withBaseProps({ 
    title: "Autospurgo Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
