import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Catanzaro",
  canonical: links.servizi["trasporto-rifiuti"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});