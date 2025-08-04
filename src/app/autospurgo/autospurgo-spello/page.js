import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Spello",
    canonical: links.autospurgo["spello"],
});
export default withBaseProps({ 
    title: "Autospurgo Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});
