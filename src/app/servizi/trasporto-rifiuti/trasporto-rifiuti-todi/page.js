import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Todi",
  canonical: links.servizi["trasporto-rifiuti"]["todi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});