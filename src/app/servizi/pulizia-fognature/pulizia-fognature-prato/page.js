import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Prato",
  canonical: links.servizi["pulizia-fognature"]["prato"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
