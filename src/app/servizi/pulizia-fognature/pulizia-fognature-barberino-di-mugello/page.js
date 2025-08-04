import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Barberino di Mugello",
  canonical: links.servizi["pulizia-fognature"]["barberino-di-mugello"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});
