import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Brescia",
  canonical: links.servizi["spurgo-pozzi-neri"]["brescia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});