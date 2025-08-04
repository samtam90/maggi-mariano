import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Matera" });
export default withBaseProps({ 
    title: "Autospurgo Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});
