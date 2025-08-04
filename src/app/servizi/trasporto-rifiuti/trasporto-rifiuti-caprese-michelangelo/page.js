import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caprese Michelangelo",
  canonical: links.servizi["trasporto-rifiuti"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});