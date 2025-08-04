import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rovigo",
  canonical: links.servizi["trasporto-acqua"]["rovigo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});