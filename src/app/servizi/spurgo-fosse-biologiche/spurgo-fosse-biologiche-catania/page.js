import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catania",
  canonical: links.servizi["spurgo-fosse-biologiche"]["catania"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});
