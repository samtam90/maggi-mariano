import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Spello",
  canonical: links.servizi["spurgo-pozzi-neri"]["spello"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});