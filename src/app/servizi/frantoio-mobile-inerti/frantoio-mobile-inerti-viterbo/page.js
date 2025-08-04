import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Viterbo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["viterbo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});
