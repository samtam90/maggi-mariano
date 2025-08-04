import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sestino",
  canonical: links.servizi["spurgo-pozzi-neri"]["sestino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});