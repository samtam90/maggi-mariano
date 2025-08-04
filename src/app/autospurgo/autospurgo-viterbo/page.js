import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Viterbo" });
export default withBaseProps({ 
    title: "Autospurgo Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});
