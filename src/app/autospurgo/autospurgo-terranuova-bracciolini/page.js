import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Terranuova Bracciolini" });
export default withBaseProps({ 
    title: "Autospurgo Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});
