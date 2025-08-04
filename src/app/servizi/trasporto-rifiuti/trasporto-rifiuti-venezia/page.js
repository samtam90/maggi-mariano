import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Venezia",
  canonical: links.servizi["trasporto-rifiuti"]["venezia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});