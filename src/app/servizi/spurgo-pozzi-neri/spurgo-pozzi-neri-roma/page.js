import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Roma",
  canonical: links.servizi["spurgo-pozzi-neri"]["roma"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});