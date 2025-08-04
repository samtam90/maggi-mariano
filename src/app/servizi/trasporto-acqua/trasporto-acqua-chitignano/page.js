import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Chitignano",
  canonical: links.servizi["trasporto-acqua"]["chitignano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});