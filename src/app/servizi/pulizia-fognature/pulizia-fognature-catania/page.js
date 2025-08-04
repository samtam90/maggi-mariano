import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Catania",
  canonical: links.servizi["pulizia-fognature"]["catania"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});
