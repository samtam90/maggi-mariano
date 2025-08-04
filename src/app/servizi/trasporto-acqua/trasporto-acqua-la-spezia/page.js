import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua La Spezia",
  canonical: links.servizi["trasporto-acqua"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});