import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Collazzone",
  canonical: links.servizi["spurgo-pozzi-neri"]["collazzone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});