import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rieti",
  canonical: links.servizi["pulizia-fognature"]["rieti"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
