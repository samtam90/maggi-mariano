import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Scheggia e Pascelupo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["scheggia-e-pascelupo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});
