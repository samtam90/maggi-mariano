import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Assisi",
  canonical: links.servizi["trasporto-rifiuti"]["assisi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});