import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gubbio",
  canonical: links.servizi["trasporto-rifiuti"]["gubbio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});