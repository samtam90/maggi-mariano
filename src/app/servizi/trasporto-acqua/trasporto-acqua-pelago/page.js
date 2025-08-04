import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pelago",
  canonical: links.servizi["trasporto-acqua"]["pelago"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});