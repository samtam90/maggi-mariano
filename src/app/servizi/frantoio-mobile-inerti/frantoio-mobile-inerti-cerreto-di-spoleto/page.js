import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cerreto di Spoleto", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cerreto-di-spoleto"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
