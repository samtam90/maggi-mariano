import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Collazzone",
    canonical: links.autospurgo["collazzone"],
});
export default withBaseProps({ 
    title: "Autospurgo Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
