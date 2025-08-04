import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cremona",
  canonical: links.servizi["trasporto-acqua"]["cremona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});