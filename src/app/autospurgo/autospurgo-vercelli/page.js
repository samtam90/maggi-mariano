import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Vercelli" });
export default withBaseProps({ 
    title: "Autospurgo Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
