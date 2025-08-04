import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Scheggia e Pascelupo",
  canonical: links.servizi["trasporto-acqua"]["scheggia-e-pascelupo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});