import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Trieste",
  canonical: links.servizi["trasporto-acqua"]["trieste"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});