import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Scarperia e San Piero",
  canonical: links.servizi["pulizia-fognature"]["scarperia-e-san-piero"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});
