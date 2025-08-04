import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Palermo" });
export default withBaseProps({ 
    title: "Autospurgo Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
