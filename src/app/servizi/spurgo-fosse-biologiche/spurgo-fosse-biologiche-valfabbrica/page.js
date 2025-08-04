import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Valfabbrica",
  canonical: links.servizi["spurgo-fosse-biologiche"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
