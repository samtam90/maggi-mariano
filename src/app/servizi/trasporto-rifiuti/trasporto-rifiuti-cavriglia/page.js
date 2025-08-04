import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cavriglia",
  canonical: links.servizi["trasporto-rifiuti"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});