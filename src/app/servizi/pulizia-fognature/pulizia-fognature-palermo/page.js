import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Palermo",
  canonical: links.servizi["pulizia-fognature"]["palermo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
