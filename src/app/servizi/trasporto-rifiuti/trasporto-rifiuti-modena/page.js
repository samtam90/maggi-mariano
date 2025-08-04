import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Modena",
  canonical: links.servizi["trasporto-rifiuti"]["modena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});