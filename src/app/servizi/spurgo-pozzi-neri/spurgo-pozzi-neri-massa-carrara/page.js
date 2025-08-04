import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Massa-Carrara",
  canonical: links.servizi["spurgo-pozzi-neri"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});