import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Brindisi",
  canonical: links.servizi["trasporto-acqua"]["brindisi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});