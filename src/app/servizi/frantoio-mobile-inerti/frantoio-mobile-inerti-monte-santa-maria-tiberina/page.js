import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Monte Santa Maria Tiberina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["monte-santa-maria-tiberina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});
