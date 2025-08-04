import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Agrigento" });
export default withBaseProps({ 
    title: "Autospurgo Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
