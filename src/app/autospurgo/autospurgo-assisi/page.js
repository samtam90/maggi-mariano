import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Assisi",
    canonical: links.autospurgo["assisi"],
});
export default withBaseProps({ 
    title: "Autospurgo Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});
