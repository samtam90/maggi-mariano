import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Giano dell'Umbria",
  canonical: links.servizi["spurgo-pozzi-neri"]["giano-dell-umbria"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});