import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Preci",
  canonical: links.servizi["spurgo-pozzi-neri"]["preci"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});