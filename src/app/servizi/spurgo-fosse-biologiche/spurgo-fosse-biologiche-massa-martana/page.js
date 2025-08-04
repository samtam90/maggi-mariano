import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Massa Martana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
