import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Massa-Carrara",
  canonical: links.servizi["trasporto-acqua"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});