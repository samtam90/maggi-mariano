import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cosenza",
  canonical: links.servizi["trasporto-rifiuti"]["cosenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});