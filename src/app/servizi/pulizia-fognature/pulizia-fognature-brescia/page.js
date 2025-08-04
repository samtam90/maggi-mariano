import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Brescia",
  canonical: links.servizi["pulizia-fognature"]["brescia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
