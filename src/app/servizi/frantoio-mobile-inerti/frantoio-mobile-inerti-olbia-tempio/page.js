import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Olbia-Tempio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["olbia-tempio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});
