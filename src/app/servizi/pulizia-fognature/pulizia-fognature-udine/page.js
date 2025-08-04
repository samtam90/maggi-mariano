import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Udine",
  canonical: links.servizi["pulizia-fognature"]["udine"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
