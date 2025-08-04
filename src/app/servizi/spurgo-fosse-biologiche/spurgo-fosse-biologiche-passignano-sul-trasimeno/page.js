import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Passignano sul Trasimeno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});
