import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Siena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["siena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
