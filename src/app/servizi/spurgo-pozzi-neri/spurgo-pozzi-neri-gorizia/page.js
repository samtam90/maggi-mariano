import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gorizia",
  canonical: links.servizi["spurgo-pozzi-neri"]["gorizia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});