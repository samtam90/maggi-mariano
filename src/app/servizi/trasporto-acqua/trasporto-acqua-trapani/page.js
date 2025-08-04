import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Trapani",
  canonical: links.servizi["trasporto-acqua"]["trapani"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});