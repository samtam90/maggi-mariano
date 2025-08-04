import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Capraia e Limite", 
    canonical: links.servizi["frantoio-mobile-inerti"]["capraia-e-limite"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});
