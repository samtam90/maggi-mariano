import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Nocera Umbra",
  canonical: links.servizi["pulizia-fognature"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});
