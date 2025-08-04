import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pelago",
  canonical: links.servizi["pulizia-fognature"]["pelago"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});
