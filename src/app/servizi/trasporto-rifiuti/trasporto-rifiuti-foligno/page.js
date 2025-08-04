import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foligno",
  canonical: links.servizi["trasporto-rifiuti"]["foligno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});