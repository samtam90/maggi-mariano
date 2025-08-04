import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Massa-Carrara",
  canonical: links.servizi["trasporto-rifiuti"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});