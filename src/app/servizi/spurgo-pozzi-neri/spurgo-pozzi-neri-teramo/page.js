import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Teramo",
  canonical: links.servizi["spurgo-pozzi-neri"]["teramo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});