import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vaglia",
  canonical: links.servizi["spurgo-pozzi-neri"]["vaglia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});