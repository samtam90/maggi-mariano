import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lisciano Niccone",
  canonical: links.servizi["spurgo-pozzi-neri"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"}  
});