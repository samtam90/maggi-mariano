import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cascia",
    canonical: links.autospurgo["cascia"],
});
export default withBaseProps({ 
    title: "Autospurgo Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});
