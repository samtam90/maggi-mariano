import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Firenzuola" });
export default withBaseProps({ 
    title: "Autospurgo Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
