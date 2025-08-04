import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Potenza",
  canonical: links.servizi["spurgo-pozzi-neri"]["potenza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});