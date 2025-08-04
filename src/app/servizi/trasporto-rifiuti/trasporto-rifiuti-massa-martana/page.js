import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Massa Martana",
  canonical: links.servizi["trasporto-rifiuti"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});