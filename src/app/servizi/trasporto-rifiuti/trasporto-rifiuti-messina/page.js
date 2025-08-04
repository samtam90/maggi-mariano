import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Messina",
  canonical: links.servizi["trasporto-rifiuti"]["messina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});