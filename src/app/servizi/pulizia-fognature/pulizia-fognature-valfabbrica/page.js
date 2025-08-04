import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Valfabbrica",
  canonical: links.servizi["pulizia-fognature"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
