import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Todi",
  canonical: links.servizi["pulizia-fognature"]["todi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
