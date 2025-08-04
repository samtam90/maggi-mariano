import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pesaro-Urbino",
  canonical: links.servizi["spurgo-pozzi-neri"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});