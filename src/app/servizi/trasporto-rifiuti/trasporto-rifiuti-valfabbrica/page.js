import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Valfabbrica",
  canonical: links.servizi["trasporto-rifiuti"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});