import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Treviso",
  canonical: links.servizi["spurgo-fosse-biologiche"]["treviso"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
