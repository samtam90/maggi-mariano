import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Frosinone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["frosinone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});
