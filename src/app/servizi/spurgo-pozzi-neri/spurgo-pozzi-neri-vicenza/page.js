import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vicenza",
  canonical: links.servizi["spurgo-pozzi-neri"]["vicenza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});