import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Palermo",
  canonical: links.servizi["trasporto-acqua"]["palermo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});