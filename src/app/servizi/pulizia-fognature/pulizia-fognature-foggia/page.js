import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Foggia",
  canonical: links.servizi["pulizia-fognature"]["foggia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
