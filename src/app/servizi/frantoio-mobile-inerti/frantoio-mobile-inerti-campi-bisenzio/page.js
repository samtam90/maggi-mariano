import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Campi Bisenzio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["campi-bisenzio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});
