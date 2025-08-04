import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Terni",
  canonical: links.servizi["trasporto-rifiuti"]["terni"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});