import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Livorno",
  canonical: links.servizi["trasporto-acqua"]["livorno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});