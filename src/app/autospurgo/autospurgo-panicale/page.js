import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Panicale",
    canonical: links.autospurgo["panicale"],
});
export default withBaseProps({ 
    title: "Autospurgo Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});
