import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Viterbo" });
export default withBaseProps({ 
    title: "Pulizia fognature Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});
