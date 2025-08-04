import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Salerno",
    canonical: links.autospurgo["salerno"],
});
export default withBaseProps({ 
    title: "Autospurgo Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});
