import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti La Spezia",
  canonical: links.servizi["trasporto-rifiuti"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});