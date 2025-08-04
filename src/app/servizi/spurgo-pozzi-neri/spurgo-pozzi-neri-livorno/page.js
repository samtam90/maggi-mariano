import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Livorno",
  canonical: links.servizi["spurgo-pozzi-neri"]["livorno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});