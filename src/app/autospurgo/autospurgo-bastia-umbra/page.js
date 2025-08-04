import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bastia Umbra" });
export default withBaseProps({ 
    title: "Autospurgo Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});
