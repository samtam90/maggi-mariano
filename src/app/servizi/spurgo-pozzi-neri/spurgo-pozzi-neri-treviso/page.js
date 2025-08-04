import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Treviso",
  canonical: links.servizi["spurgo-pozzi-neri"]["treviso"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});