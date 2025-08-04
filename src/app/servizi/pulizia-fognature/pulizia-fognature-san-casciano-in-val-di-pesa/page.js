import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature San Casciano in Val di Pesa" });
export default withBaseProps({ 
    title: "Pulizia fognature San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"}  
});
