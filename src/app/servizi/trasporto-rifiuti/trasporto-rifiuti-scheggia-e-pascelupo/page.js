import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scheggia e Pascelupo",
  canonical: links.servizi["trasporto-rifiuti"]["scheggia-e-pascelupo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});