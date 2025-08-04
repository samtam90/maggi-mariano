import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Agrigento",
  canonical: links.servizi["spurgo-pozzi-neri"]["agrigento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});