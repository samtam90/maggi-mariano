import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Caprese Michelangelo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["caprese-michelangelo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});
