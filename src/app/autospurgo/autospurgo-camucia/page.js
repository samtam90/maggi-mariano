import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Camucia",
    canonical: links.autospurgo["camucia"],
});
export default withBaseProps({ 
    title: "Autospurgo Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});
