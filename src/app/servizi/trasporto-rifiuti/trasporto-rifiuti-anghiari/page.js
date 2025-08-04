import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Anghiari",
  canonical: links.servizi["trasporto-rifiuti"]["anghiari"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});