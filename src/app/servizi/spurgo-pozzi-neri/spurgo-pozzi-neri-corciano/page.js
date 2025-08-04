import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Corciano",
  canonical: links.servizi["spurgo-pozzi-neri"]["corciano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});