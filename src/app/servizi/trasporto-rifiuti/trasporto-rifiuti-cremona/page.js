import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cremona",
  canonical: links.servizi["trasporto-rifiuti"]["cremona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});