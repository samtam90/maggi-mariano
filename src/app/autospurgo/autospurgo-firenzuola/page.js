import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Firenzuola",
    canonical: links.autospurgo["firenzuola"],
});
export default withBaseProps({ 
    title: "Autospurgo Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
