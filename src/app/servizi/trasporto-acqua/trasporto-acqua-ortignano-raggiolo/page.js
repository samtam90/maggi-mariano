import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ortignano Raggiolo",
  canonical: links.servizi["trasporto-acqua"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});