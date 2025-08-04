import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Chieti",
  canonical: links.servizi["trasporto-acqua"]["chieti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});