import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Campobasso",
  canonical: links.servizi["trasporto-rifiuti"]["campobasso"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});