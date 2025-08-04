import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Matera",
  canonical: links.servizi["spurgo-pozzi-neri"]["matera"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});