import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Laterina",
  canonical: links.servizi["trasporto-rifiuti"]["laterina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});