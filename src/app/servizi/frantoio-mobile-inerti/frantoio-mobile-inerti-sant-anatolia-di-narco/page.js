import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sant'Anatolia di Narco", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sant-anatolia-di-narco"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
