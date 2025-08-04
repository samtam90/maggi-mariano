import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature La Spezia",
  canonical: links.servizi["pulizia-fognature"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
