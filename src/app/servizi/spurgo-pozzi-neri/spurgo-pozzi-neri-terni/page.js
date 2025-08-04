import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Terni",
  canonical: links.servizi["spurgo-pozzi-neri"]["terni"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});