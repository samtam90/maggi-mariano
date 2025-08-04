import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri La Spezia",
  canonical: links.servizi["spurgo-pozzi-neri"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});