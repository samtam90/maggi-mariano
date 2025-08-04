import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Marradi",
  canonical: links.servizi["trasporto-acqua"]["marradi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});