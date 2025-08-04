import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Nuoro",
  canonical: links.servizi["trasporto-rifiuti"]["nuoro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});