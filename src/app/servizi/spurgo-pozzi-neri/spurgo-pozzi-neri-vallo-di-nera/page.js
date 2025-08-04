import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vallo di Nera",
  canonical: links.servizi["spurgo-pozzi-neri"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});