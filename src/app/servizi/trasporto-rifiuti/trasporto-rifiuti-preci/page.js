import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Preci",
  canonical: links.servizi["trasporto-rifiuti"]["preci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});