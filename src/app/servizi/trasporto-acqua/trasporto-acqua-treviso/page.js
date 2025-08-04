import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Treviso",
  canonical: links.servizi["trasporto-acqua"]["treviso"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});