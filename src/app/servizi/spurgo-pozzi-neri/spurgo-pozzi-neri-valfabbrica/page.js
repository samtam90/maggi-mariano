import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Valfabbrica",
  canonical: links.servizi["spurgo-pozzi-neri"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});