import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Corciano",
  canonical: links.servizi["pulizia-fognature"]["corciano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});
