import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ragusa",
    canonical: links.autospurgo["ragusa"],
});
export default withBaseProps({ 
    title: "Autospurgo Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
