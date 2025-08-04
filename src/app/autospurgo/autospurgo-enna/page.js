import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Enna" });
export default withBaseProps({ 
    title: "Autospurgo Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});
