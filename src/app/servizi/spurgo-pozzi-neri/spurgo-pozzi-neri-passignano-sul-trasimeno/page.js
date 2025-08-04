import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Passignano sul Trasimeno",
  canonical: links.servizi["spurgo-pozzi-neri"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});