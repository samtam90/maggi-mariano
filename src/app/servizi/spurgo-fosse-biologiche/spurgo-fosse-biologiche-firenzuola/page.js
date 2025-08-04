import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Firenzuola",
  canonical: links.servizi["spurgo-fosse-biologiche"]["firenzuola"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
