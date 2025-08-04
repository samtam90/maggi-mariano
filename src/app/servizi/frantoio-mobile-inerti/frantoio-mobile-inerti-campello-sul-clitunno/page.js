import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Campello sul Clitunno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["campello-sul-clitunno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});
