import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Capolona",
  canonical: links.servizi["spurgo-pozzi-neri"]["capolona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});