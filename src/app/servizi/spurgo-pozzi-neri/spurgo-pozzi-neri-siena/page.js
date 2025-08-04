import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Siena",
  canonical: links.servizi["spurgo-pozzi-neri"]["siena"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});