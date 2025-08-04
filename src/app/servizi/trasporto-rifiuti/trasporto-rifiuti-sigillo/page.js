import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sigillo",
  canonical: links.servizi["trasporto-rifiuti"]["sigillo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});