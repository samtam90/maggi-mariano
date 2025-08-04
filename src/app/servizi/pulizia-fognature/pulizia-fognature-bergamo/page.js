import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bergamo",
  canonical: links.servizi["pulizia-fognature"]["bergamo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
