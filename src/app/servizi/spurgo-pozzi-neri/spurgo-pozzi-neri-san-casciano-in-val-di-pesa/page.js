import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Casciano in Val di Pesa",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-casciano-in-val-di-pesa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"}  
});