import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Monte Castello di Vibio" });
export default withBaseProps({ 
    title: "Autospurgo Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});
