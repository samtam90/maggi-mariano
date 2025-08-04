import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cremona",
  canonical: links.servizi["spurgo-pozzi-neri"]["cremona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});