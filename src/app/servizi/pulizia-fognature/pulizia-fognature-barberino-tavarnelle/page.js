import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Barberino Tavarnelle",
  canonical: links.servizi["pulizia-fognature"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});
