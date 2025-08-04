import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Barberino Tavarnelle",
  canonical: links.servizi["spurgo-pozzi-neri"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});