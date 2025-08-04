import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature San Casciano in Val di Pesa",
  canonical: links.servizi["pulizia-fognature"]["san-casciano-in-val-di-pesa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"}  
});
