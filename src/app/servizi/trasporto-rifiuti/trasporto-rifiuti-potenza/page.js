import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Potenza",
  canonical: links.servizi["trasporto-rifiuti"]["potenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});