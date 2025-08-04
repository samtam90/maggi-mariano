import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Matera",
  canonical: links.servizi["trasporto-rifiuti"]["matera"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});