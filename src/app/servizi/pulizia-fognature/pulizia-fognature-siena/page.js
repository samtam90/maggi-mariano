import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Siena",
  canonical: links.servizi["pulizia-fognature"]["siena"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
