import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ortignano Raggiolo",
  canonical: links.servizi["pulizia-fognature"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
