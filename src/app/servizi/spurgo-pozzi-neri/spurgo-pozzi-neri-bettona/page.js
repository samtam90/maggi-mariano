import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bettona",
  canonical: links.servizi["spurgo-pozzi-neri"]["bettona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});