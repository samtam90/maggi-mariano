import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cremona",
    canonical: links.autospurgo["cremona"],
});
export default withBaseProps({ 
    title: "Autospurgo Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
