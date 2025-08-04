import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Fermo",
  canonical: links.servizi["trasporto-acqua"]["fermo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});