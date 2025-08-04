import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Londa",
  canonical: links.servizi["spurgo-pozzi-neri"]["londa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});