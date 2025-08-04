import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Chieti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["chieti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
