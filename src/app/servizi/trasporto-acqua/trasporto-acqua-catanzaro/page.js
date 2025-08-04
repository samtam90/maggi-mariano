import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Catanzaro",
  canonical: links.servizi["trasporto-acqua"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});