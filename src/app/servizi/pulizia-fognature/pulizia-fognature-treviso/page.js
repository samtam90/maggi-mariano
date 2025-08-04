import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Treviso",
  canonical: links.servizi["pulizia-fognature"]["treviso"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
