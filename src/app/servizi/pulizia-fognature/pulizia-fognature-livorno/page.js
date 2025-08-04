import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Livorno",
  canonical: links.servizi["pulizia-fognature"]["livorno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
