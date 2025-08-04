import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Brindisi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["brindisi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
