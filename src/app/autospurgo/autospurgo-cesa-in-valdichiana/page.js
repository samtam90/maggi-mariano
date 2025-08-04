import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cesa in valdichiana",
    canonical: links.autospurgo["cesa-in-valdichiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});
