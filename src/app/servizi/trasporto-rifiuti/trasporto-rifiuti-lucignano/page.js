import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lucignano",
  canonical: links.servizi["trasporto-rifiuti"]["lucignano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});