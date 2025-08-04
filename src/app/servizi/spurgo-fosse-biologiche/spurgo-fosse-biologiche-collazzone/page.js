import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Collazzone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["collazzone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
