import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foligno",
  canonical: links.servizi["spurgo-pozzi-neri"]["foligno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});