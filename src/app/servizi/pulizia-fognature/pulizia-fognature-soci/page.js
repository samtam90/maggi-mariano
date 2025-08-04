import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Soci",
  canonical: links.servizi["pulizia-fognature"]["soci"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
