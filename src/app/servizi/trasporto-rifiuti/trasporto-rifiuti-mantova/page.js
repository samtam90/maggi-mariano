import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Mantova",
  canonical: links.servizi["trasporto-rifiuti"]["mantova"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});