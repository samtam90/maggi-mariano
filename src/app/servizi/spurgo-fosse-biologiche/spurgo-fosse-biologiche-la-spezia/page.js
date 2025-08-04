import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche La Spezia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
