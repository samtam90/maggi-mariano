import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Signa",
  canonical: links.servizi["spurgo-pozzi-neri"]["signa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});