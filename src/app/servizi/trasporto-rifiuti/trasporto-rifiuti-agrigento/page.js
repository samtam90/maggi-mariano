import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Agrigento",
  canonical: links.servizi["trasporto-rifiuti"]["agrigento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});