import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pesaro-Urbino",
  canonical: links.servizi["trasporto-rifiuti"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});