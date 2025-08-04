import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Crotone",
  canonical: links.servizi["spurgo-pozzi-neri"]["crotone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});