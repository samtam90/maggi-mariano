import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Avellino",
  canonical: links.servizi["spurgo-pozzi-neri"]["avellino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});