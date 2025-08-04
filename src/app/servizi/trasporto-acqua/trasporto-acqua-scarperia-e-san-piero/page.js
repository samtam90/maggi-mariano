import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Scarperia e San Piero",
  canonical: links.servizi["trasporto-acqua"]["scarperia-e-san-piero"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});