import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Collazzone",
  canonical: links.servizi["pulizia-fognature"]["collazzone"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
