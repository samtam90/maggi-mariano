import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rieti",
  canonical: links.servizi["trasporto-acqua"]["rieti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});