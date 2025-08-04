import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo San Casciano in Val di Pesa",
    canonical: links.autospurgo["san-casciano-in-val-di-pesa"],
});
export default withBaseProps({ 
    title: "Autospurgo San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"}  
});
