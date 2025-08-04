import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Torgiano",
  canonical: links.servizi["pulizia-fognature"]["torgiano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});
