import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Trieste",
    canonical: links.autospurgo["trieste"],
});
export default withBaseProps({ 
    title: "Autospurgo Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});
