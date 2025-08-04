import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Marradi",
    canonical: links.autospurgo["marradi"],
});
export default withBaseProps({ 
    title: "Autospurgo Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
