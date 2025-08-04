import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rimini",
    canonical: links.autospurgo["rimini"],
});
export default withBaseProps({ 
    title: "Autospurgo Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});
