import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monte Santa Maria Tiberina",
  canonical: links.servizi["trasporto-rifiuti"]["monte-santa-maria-tiberina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});