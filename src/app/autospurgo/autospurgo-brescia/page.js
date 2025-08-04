import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Brescia",
    canonical: links.autospurgo["brescia"],
});
export default withBaseProps({ 
    title: "Autospurgo Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
