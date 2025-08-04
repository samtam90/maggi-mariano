import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Città della Pieve",
  canonical: links.servizi["trasporto-acqua"]["città-della-pieve"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});