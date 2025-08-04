import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cosenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cosenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
