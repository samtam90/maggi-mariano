import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rieti",
  canonical: links.servizi["spurgo-pozzi-neri"]["rieti"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});