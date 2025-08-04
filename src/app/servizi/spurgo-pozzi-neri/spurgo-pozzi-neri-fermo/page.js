import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fermo",
  canonical: links.servizi["spurgo-pozzi-neri"]["fermo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});