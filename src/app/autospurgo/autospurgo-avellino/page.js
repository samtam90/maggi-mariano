import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Avellino" });
export default withBaseProps({ 
    title: "Autospurgo Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
