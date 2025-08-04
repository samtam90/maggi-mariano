import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pesaro-Urbino",
  canonical: links.servizi["pulizia-fognature"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
