import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Medio Campidano",
  canonical: links.servizi["trasporto-rifiuti"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});