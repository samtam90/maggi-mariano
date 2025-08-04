import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Venezia",
  canonical: links.servizi["trasporto-acqua"]["venezia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});