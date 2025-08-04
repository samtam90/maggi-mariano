import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Varese",
  canonical: links.servizi["pulizia-fognature"]["varese"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
