import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Brindisi",
  canonical: links.servizi["trasporto-rifiuti"]["brindisi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});