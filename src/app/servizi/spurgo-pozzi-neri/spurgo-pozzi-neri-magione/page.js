import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Magione",
  canonical: links.servizi["spurgo-pozzi-neri"]["magione"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});