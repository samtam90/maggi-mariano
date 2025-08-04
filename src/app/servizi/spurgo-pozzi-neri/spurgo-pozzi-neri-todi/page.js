import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Todi",
  canonical: links.servizi["spurgo-pozzi-neri"]["todi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});