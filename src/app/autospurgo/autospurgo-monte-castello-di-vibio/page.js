import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monte Castello di Vibio",
    canonical: links.autospurgo["monte-castello-di-vibio"],
});
export default withBaseProps({ 
    title: "Autospurgo Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});
