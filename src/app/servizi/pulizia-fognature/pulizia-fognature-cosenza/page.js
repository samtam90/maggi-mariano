import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cosenza",
  canonical: links.servizi["pulizia-fognature"]["cosenza"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
