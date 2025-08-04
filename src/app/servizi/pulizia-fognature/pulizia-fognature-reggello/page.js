import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggello",
  canonical: links.servizi["pulizia-fognature"]["reggello"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});
