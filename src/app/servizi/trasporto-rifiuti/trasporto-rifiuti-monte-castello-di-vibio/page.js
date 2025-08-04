import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monte Castello di Vibio",
  canonical: links.servizi["trasporto-rifiuti"]["monte-castello-di-vibio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});