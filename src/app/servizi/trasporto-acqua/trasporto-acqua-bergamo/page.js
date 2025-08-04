import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bergamo",
  canonical: links.servizi["trasporto-acqua"]["bergamo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});