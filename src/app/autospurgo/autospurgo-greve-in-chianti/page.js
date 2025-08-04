import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Greve in Chianti" });
export default withBaseProps({ 
    title: "Autospurgo Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});
