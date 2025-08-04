import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Prato",
  canonical: links.servizi["spurgo-pozzi-neri"]["prato"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});