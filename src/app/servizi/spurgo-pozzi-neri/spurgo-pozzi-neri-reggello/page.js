import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Reggello",
  canonical: links.servizi["spurgo-pozzi-neri"]["reggello"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});