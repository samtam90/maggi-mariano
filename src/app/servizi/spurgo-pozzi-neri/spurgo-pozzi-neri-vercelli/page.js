import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vercelli",
  canonical: links.servizi["spurgo-pozzi-neri"]["vercelli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});