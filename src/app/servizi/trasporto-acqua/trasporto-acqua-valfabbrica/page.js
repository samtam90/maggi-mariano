import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Valfabbrica",
  canonical: links.servizi["trasporto-acqua"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});