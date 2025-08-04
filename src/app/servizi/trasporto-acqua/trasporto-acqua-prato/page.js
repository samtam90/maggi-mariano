import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Prato",
  canonical: links.servizi["trasporto-acqua"]["prato"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});