import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Venezia",
  canonical: links.servizi["pulizia-fognature"]["venezia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
