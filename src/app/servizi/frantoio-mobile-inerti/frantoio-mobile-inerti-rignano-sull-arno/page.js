import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rignano sull'Arno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rignano-sull-arno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});
