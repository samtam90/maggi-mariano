import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vicenza",
  canonical: links.servizi["trasporto-rifiuti"]["vicenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});