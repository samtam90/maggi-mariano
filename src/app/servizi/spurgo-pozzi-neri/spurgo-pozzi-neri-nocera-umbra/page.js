import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Nocera Umbra",
  canonical: links.servizi["spurgo-pozzi-neri"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});