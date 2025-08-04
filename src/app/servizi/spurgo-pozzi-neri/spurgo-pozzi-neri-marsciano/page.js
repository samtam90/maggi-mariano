import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Marsciano",
  canonical: links.servizi["spurgo-pozzi-neri"]["marsciano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});