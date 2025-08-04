import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Prato",
  canonical: links.servizi["spurgo-fosse-biologiche"]["prato"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
