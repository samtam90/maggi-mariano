import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ortignano Raggiolo",
  canonical: links.servizi["spurgo-pozzi-neri"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});