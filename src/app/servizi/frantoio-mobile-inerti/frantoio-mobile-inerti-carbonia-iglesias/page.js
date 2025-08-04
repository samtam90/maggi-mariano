import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Carbonia Iglesias", 
    canonical: links.servizi["frantoio-mobile-inerti"]["carbonia-iglesias"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});
