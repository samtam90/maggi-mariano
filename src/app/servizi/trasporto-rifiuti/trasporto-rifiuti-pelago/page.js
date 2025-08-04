import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pelago",
  canonical: links.servizi["trasporto-rifiuti"]["pelago"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});