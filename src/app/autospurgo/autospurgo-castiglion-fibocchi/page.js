import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Castiglion Fibocchi",
    canonical: links.autospurgo["castiglion-fibocchi"],
});
export default withBaseProps({ 
    title: "Autospurgo Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});
