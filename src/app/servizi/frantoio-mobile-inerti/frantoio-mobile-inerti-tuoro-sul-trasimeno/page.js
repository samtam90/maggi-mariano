import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Tuoro sul Trasimeno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["tuoro-sul-trasimeno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});
