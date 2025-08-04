import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Barberino Tavarnelle",
  canonical: links.servizi["trasporto-rifiuti"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});