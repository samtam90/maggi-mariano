import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Biella",
  canonical: links.servizi["spurgo-pozzi-neri"]["biella"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});