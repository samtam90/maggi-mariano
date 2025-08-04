import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Soci",
  canonical: links.servizi["trasporto-rifiuti"]["soci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});