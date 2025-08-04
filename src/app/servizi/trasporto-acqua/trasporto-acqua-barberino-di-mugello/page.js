import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Barberino di Mugello",
  canonical: links.servizi["trasporto-acqua"]["barberino-di-mugello"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});