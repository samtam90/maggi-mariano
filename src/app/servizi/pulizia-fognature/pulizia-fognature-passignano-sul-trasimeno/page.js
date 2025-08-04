import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Passignano sul Trasimeno",
  canonical: links.servizi["pulizia-fognature"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});
