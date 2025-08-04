import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Scheggino",
  canonical: links.servizi["spurgo-pozzi-neri"]["scheggino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});