import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Foiano della Chiana",
    canonical: links.autospurgo["foiano-della-chiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});
