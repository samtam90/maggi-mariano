import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monza Brianza",
    canonical: links.autospurgo["monza-brianza"],
});
export default withBaseProps({ 
    title: "Autospurgo Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
