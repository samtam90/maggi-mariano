import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Spello",
  canonical: links.servizi["trasporto-acqua"]["spello"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});