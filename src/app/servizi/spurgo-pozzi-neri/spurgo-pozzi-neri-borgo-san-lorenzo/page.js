import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Borgo San Lorenzo",
  canonical: links.servizi["spurgo-pozzi-neri"]["borgo-san-lorenzo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});