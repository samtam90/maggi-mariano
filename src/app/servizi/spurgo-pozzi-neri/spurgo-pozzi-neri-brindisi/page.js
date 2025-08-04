import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Brindisi",
  canonical: links.servizi["spurgo-pozzi-neri"]["brindisi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});