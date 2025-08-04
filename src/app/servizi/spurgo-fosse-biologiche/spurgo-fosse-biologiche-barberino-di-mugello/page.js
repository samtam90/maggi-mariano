import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Barberino di Mugello",
  canonical: links.servizi["spurgo-fosse-biologiche"]["barberino-di-mugello"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});
