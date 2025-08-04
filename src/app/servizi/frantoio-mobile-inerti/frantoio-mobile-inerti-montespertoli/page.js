import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Montespertoli", 
    canonical: links.servizi["frantoio-mobile-inerti"]["montespertoli"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});
