import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foggia",
  canonical: links.servizi["spurgo-pozzi-neri"]["foggia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});