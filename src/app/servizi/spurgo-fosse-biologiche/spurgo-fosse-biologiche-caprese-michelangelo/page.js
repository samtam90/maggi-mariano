import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caprese Michelangelo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});
