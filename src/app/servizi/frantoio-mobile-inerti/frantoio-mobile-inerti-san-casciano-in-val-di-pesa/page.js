import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti San Casciano in Val di Pesa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["san-casciano-in-val-di-pesa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"}  
});
