import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rovigo",
  canonical: links.servizi["pulizia-fognature"]["rovigo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
