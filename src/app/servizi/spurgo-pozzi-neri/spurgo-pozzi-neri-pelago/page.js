import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pelago",
  canonical: links.servizi["spurgo-pozzi-neri"]["pelago"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});