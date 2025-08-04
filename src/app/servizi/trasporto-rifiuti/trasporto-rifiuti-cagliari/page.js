import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cagliari",
  canonical: links.servizi["trasporto-rifiuti"]["cagliari"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});