import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Milano",
  canonical: links.servizi["pulizia-fognature"]["milano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});
