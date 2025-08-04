import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Terranuova Bracciolini",
    canonical: links.autospurgo["terranuova-bracciolini"],
});
export default withBaseProps({ 
    title: "Autospurgo Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});
