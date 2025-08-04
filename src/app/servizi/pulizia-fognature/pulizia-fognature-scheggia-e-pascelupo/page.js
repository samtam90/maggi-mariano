import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Scheggia e Pascelupo",
  canonical: links.servizi["pulizia-fognature"]["scheggia-e-pascelupo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});
