import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Todi",
  canonical: links.servizi["trasporto-acqua"]["todi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});