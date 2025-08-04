import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Soci",
  canonical: links.servizi["spurgo-pozzi-neri"]["soci"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});