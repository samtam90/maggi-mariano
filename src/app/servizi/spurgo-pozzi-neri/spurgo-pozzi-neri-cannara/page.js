import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cannara",
  canonical: links.servizi["spurgo-pozzi-neri"]["cannara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});