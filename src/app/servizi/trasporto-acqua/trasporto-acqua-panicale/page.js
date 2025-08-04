import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Panicale",
  canonical: links.servizi["trasporto-acqua"]["panicale"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});