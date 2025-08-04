import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Medio Campidano",
  canonical: links.servizi["trasporto-acqua"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});