import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Frosinone",
  canonical: links.servizi["spurgo-pozzi-neri"]["frosinone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});