import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Montevarchi" });
export default withBaseProps({ 
    title: "Autospurgo Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
