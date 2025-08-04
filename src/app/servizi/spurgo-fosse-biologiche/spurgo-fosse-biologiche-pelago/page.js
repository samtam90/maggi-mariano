import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pelago",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pelago"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});
