import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pesaro-Urbino",
  canonical: links.servizi["trasporto-acqua"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});