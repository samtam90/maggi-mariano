import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Trapani",
  canonical: links.servizi["pulizia-fognature"]["trapani"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
