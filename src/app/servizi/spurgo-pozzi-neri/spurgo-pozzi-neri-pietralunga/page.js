import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pietralunga",
  canonical: links.servizi["spurgo-pozzi-neri"]["pietralunga"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});