import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Napoli",
    canonical: links.autospurgo["napoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});
