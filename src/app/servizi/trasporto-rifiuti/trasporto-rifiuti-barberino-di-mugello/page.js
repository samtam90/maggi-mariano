import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Barberino di Mugello",
  canonical: links.servizi["trasporto-rifiuti"]["barberino-di-mugello"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});