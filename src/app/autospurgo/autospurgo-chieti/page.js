import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Chieti" });
export default withBaseProps({ 
    title: "Autospurgo Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
