import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Firenzuola",
  canonical: links.servizi["trasporto-acqua"]["firenzuola"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});