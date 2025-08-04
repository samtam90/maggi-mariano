import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catanzaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
