import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Benevento",
  canonical: links.servizi["spurgo-pozzi-neri"]["benevento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});