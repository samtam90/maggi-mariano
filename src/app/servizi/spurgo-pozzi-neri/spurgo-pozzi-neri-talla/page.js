import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Talla",
  canonical: links.servizi["spurgo-pozzi-neri"]["talla"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});