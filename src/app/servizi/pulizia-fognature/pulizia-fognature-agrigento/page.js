import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Agrigento",
  canonical: links.servizi["pulizia-fognature"]["agrigento"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
