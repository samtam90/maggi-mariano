import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Londa" });
export default withBaseProps({ 
    title: "Autospurgo Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
