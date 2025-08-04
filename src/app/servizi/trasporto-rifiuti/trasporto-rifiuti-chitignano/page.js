import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Chitignano",
  canonical: links.servizi["trasporto-rifiuti"]["chitignano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});