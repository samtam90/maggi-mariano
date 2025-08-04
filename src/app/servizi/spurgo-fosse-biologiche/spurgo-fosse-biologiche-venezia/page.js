import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Venezia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["venezia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
