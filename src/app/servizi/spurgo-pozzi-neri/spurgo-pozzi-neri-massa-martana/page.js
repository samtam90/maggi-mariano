import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Massa Martana",
  canonical: links.servizi["spurgo-pozzi-neri"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});