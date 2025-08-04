import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Lucignano",
  canonical: links.servizi["trasporto-acqua"]["lucignano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});