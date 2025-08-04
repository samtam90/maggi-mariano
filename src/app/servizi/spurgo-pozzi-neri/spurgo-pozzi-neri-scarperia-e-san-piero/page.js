import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Scarperia e San Piero",
  canonical: links.servizi["spurgo-pozzi-neri"]["scarperia-e-san-piero"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});