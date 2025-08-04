import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Gambassi Terme", 
    canonical: links.servizi["frantoio-mobile-inerti"]["gambassi-terme"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
