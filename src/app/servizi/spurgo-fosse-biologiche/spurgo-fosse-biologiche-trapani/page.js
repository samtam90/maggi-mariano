import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trapani",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trapani"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
