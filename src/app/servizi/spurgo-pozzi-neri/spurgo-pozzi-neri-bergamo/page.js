import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bergamo",
  canonical: links.servizi["spurgo-pozzi-neri"]["bergamo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});