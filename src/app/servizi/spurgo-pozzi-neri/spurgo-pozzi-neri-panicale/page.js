import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Panicale",
  canonical: links.servizi["spurgo-pozzi-neri"]["panicale"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});