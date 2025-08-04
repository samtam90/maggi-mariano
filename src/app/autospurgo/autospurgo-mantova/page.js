import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Mantova" });
export default withBaseProps({ 
    title: "Autospurgo Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
