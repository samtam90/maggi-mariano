import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ogliastra",
  canonical: links.servizi["spurgo-pozzi-neri"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});