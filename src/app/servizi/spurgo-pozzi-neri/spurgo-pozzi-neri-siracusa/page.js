import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Siracusa",
  canonical: links.servizi["spurgo-pozzi-neri"]["siracusa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});