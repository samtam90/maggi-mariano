import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vinci",
  canonical: links.servizi["trasporto-rifiuti"]["vinci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});