import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Foligno" });
export default withBaseProps({ 
    title: "Autospurgo Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
