import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Spello",
  canonical: links.servizi["spurgo-fosse-biologiche"]["spello"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});
