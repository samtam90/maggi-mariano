import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Gorizia",
  canonical: links.servizi["trasporto-acqua"]["gorizia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});