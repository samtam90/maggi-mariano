import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Avellino",
  canonical: links.servizi["trasporto-rifiuti"]["avellino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});