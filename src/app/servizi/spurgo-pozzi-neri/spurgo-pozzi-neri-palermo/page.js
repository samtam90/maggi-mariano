import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palermo",
  canonical: links.servizi["spurgo-pozzi-neri"]["palermo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});