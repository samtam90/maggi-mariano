import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Lisciano Niccone",
  canonical: links.servizi["trasporto-acqua"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"}  
});