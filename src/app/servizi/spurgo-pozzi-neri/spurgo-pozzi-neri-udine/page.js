import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Udine",
  canonical: links.servizi["spurgo-pozzi-neri"]["udine"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});