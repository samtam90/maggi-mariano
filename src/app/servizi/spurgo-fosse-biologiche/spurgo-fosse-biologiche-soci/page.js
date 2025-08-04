import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Soci",
  canonical: links.servizi["spurgo-fosse-biologiche"]["soci"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
