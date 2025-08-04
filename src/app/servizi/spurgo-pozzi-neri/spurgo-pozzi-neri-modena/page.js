import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Modena",
  canonical: links.servizi["spurgo-pozzi-neri"]["modena"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});