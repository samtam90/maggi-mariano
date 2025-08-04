import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cortona",
  canonical: links.servizi["spurgo-pozzi-neri"]["cortona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});