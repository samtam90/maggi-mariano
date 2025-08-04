import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Palermo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["palermo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
