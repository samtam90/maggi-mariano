import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Barberino Tavarnelle",
  canonical: links.servizi["spurgo-fosse-biologiche"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});
