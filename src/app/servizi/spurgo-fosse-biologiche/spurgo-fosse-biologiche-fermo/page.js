import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fermo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fermo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
