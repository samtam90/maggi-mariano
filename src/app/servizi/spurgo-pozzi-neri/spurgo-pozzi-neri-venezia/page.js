import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Venezia",
  canonical: links.servizi["spurgo-pozzi-neri"]["venezia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});