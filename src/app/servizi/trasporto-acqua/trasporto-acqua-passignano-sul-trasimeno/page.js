import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Passignano sul Trasimeno",
  canonical: links.servizi["trasporto-acqua"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});