import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ortignano Raggiolo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
