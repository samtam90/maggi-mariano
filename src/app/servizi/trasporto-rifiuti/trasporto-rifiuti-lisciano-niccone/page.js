import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lisciano Niccone",
  canonical: links.servizi["trasporto-rifiuti"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"}  
});