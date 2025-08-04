import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Varese",
  canonical: links.servizi["spurgo-fosse-biologiche"]["varese"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
