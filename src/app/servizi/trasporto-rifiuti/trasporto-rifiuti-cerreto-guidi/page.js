import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cerreto Guidi",
  canonical: links.servizi["trasporto-rifiuti"]["cerreto-guidi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});