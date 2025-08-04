import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Firenzuola",
  canonical: links.servizi["spurgo-pozzi-neri"]["firenzuola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});