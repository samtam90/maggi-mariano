import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Norcia",
    canonical: links.autospurgo["norcia"],
});
export default withBaseProps({ 
    title: "Autospurgo Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});
