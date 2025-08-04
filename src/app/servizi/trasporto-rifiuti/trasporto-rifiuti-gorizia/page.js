import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gorizia",
  canonical: links.servizi["trasporto-rifiuti"]["gorizia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});