import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Todi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["todi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
