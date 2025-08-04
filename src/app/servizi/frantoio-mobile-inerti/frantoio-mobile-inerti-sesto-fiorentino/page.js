import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sesto Fiorentino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sesto-fiorentino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});
