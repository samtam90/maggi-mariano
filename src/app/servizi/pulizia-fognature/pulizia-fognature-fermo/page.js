import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Fermo",
  canonical: links.servizi["pulizia-fognature"]["fermo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
