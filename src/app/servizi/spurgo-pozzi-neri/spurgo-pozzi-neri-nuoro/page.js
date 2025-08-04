import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Nuoro",
  canonical: links.servizi["spurgo-pozzi-neri"]["nuoro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});