import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montaione",
  canonical: links.servizi["spurgo-pozzi-neri"]["montaione"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});