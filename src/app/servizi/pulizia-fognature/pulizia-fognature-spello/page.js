import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Spello",
  canonical: links.servizi["pulizia-fognature"]["spello"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});
