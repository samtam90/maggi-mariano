import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sigillo",
  canonical: links.servizi["spurgo-pozzi-neri"]["sigillo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});