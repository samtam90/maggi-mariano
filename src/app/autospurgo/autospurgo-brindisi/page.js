import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Brindisi",
    canonical: links.autospurgo["brindisi"],
});
export default withBaseProps({ 
    title: "Autospurgo Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
