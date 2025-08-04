import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Montone" });
export default withBaseProps({ 
    title: "Autospurgo Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
