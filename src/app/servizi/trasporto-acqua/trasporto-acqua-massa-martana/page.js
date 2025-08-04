import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Massa Martana",
  canonical: links.servizi["trasporto-acqua"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});