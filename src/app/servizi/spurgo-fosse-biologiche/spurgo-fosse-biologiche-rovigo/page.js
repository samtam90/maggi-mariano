import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rovigo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rovigo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
