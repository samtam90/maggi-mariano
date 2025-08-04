import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Passignano sul Trasimeno",
  canonical: links.servizi["trasporto-rifiuti"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});