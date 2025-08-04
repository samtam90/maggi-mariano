import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vallo di Nera",
  canonical: links.servizi["trasporto-rifiuti"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});