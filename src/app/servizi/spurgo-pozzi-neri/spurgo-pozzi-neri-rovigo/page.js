import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rovigo",
  canonical: links.servizi["spurgo-pozzi-neri"]["rovigo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});