import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Città della Pieve",
  canonical: links.servizi["spurgo-fosse-biologiche"]["città-della-pieve"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
