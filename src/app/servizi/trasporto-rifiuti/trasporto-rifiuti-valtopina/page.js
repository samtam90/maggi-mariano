import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Valtopina",
  canonical: links.servizi["trasporto-rifiuti"]["valtopina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});