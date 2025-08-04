import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Reggio Calabria", 
    canonical: links.servizi["frantoio-mobile-inerti"]["reggio-calabria"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});
