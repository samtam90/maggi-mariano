import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Vallo di Nera",
  canonical: links.servizi["trasporto-acqua"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});