import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Torino",
  canonical: links.servizi["spurgo-pozzi-neri"]["torino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});