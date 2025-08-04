import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Chieti",
  canonical: links.servizi["pulizia-fognature"]["chieti"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
