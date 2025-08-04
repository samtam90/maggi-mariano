import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Napoli",
  canonical: links.servizi["trasporto-rifiuti"]["napoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});