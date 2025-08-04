import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Palermo",
  canonical: links.servizi["trasporto-rifiuti"]["palermo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});