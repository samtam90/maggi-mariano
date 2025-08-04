import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Catania",
  canonical: links.servizi["spurgo-pozzi-neri"]["catania"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});