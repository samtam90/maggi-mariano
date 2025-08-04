import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Firenzuola",
  canonical: links.servizi["trasporto-rifiuti"]["firenzuola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});