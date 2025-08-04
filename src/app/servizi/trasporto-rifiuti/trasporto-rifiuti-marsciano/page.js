import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Marsciano",
  canonical: links.servizi["trasporto-rifiuti"]["marsciano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});