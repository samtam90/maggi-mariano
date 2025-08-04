import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Biella",
  canonical: links.servizi["trasporto-rifiuti"]["biella"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});