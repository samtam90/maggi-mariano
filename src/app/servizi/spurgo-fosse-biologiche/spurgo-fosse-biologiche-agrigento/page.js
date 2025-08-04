import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Agrigento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["agrigento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
