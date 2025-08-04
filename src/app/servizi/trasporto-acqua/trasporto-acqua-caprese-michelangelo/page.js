import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Caprese Michelangelo",
  canonical: links.servizi["trasporto-acqua"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});