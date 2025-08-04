import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Spello" });
export default withBaseProps({ 
    title: "Autospurgo Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});
