import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Anghiari",
    canonical: links.autospurgo["anghiari"],
});
export default withBaseProps({ 
    title: "Autospurgo Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});
